import fs from "fs";
import hbs from "handlebars";
import _ from "lodash";
import process from "process";

const module = process.argv[2];
const dest = process.argv[3];
const name = process.argv[4];

if (!module) {
  throw Error("You must provide `module` argument");
}

if (!name) {
  throw Error("You must provide `name` argument");
}

if (!dest) {
  throw Error("You must provide `dest` argument");
}

const nameRegex = /^([a-z])([a-zA-Z0-9]+)$/g;
if (!nameRegex.test(name)) {
  throw Error("Name must be camelCase");
}

class TemplateGenerator {
  rootPath = "";
  name = "";
  dest = "";

  constructor(rootPath, name, dest) {
    this.rootPath = rootPath;
    this.name = name;
    this.dest = dest;
  }

  async run() {
    if (!fs.existsSync(this.dest)) {
      fs.mkdirSync(this.dest);
    }

    this.copyToDest(await this.generateTemplate(), this.dest + "/" + name);
  }

  generateTemplate(root, templates = {}) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
      root = root || this.rootPath;

      const templateStructure = fs.readdirSync(root);

      const templateJobs = templateStructure.map((templateFileName) => {
        return new Promise((resolve) => {
          const context = {
            moduleName: {
              camel: this.name,
              pascal: this.name[0].toUpperCase() + this.name.slice(1),
            },
          };

          const filePath = this.getFilePath(templateFileName, root);
          let fileName = templateFileName.replace(".hbs", "");

          const fileNameMatched = [...fileName.matchAll(/{{(.*?)}}/g)];

          if (fileNameMatched.length) {
            fileNameMatched.forEach((matched) => {
              fileName = fileName.replace(
                matched[0],
                _.get(context, matched[1])
              );
            });
          }

          fs.stat(filePath, async (_, stats) => {
            const isDir = stats.isDirectory();
            if (isDir) {
              resolve({
                name: fileName,
                template: await this.generateTemplate(filePath),
              });
            } else {
              const hbsTemplate = hbs.compile(
                fs.readFileSync(filePath, { encoding: "utf8" })
              );
              resolve({
                name: fileName,
                template: hbsTemplate(context),
              });
            }
          });
        });
      });

      Promise.all(templateJobs).then((tempalteObjs) => {
        for (const template of tempalteObjs) {
          templates[template.name] = template.template;
        }

        resolve(templates);
      });
    });
  }

  getFilePath(file, root) {
    return (root || this.rootPath) + "/" + file;
  }

  copyToDest(templateObject, rootDest) {
    if (!fs.existsSync(rootDest)) {
      fs.mkdirSync(rootDest);
    }

    for (const fileName in templateObject) {
      if (Object.hasOwnProperty.call(templateObject, fileName)) {
        const template = templateObject[fileName];
        const filePath = rootDest + "/" + fileName;

        if (typeof template === "object") {
          this.copyToDest(template, filePath);
        } else {
          fs.writeFileSync(filePath, template);
        }
      }
    }
  }
}

const generator = new TemplateGenerator("templates/" + module, name, dest);

generator.run();
