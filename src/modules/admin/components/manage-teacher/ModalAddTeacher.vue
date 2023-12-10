<template>
  <a-modal
    class="modal-add-teacher"
    :visible="props.visible"
    title="Thêm chuyên viên"
    @cancel="props.handleCancel"
    destroy-on-close
    width="1000px"
    :footer="null"
  >
    <Form :disabled="dataJson.length > 0" layout="vertical" @finish="handleFinish">
      <a-row :gutter="[40, 6]">
        <a-col :span="12">
          <form-item
            name="name"
            label="Họ tên"
            :rules="[{ required: true, message: 'Bạn phải nhập họ tên' }]"
            input="a-input"
          />
        </a-col>
        <a-col :span="12">
          <form-item
            name="phone"
            label="Số điện thoại"
            :rules="[{ validator: validatePhone }]"
            v-slot="{ value, handleChange }"
          >
            <InputTextNumber :value="value" @update:value="handleChange" />
          </form-item>
        </a-col>
        <a-col :span="12">
          <form-item
            name="gender"
            label="Giới tính"
            v-slot="{ value, handleChange }"
            :rules="[{ required: true, message: 'Bạn phải chọn giới tính' }]"
          >
            <a-select
              :value="value"
              @update:value="handleChange"
              :options="Genders"
              placeholder="Giới tính"
            />
          </form-item>
        </a-col>
        <a-col :span="12">
          <form-item
            name="birthDay"
            label="Ngày sinh"
            v-slot="{ value, handleChange }"
            :rules="[{ required: true, message: 'Bạn phải chọn ngày sinh' }]"
            :value-transformer="{
              in: (value) => (value ? dayjs(value) : value),
              out: (value) => dayjs(value).format('YYYY-MM-DD'),
            }"
          >
            <a-date-picker
              :value="value"
              style="width: 100% !important;"
              @update:value="handleChange"
              format="DD/MM/YYYY"
              placeholder="DD/MM/YYYY"
            />
          </form-item>
        </a-col>
        <a-col :span="12">
          <form-item
            name="address"
            label="Địa chỉ"
            v-slot="{ value, handleChange }"
            :rules="[{ required: true, message: 'Bạn phải nhập địa chỉ' }]"
          >
            <a-input :value="value" @update:value="handleChange" />
          </form-item>
        </a-col>
        <a-col :span="12">
          <form-item
            name="email"
            label="Email"
            v-slot="{ value, handleChange }"
            :rules="[{ required: true, type: 'email' }]"
          >
            <a-input :value="value" @update:value="handleChange" />
          </form-item>
        </a-col>
      </a-row>
      <div class="flex flex-col gap-3 py-3">
        <p>Nhập thông tin bằng file:</p>
        <input id="fileInput" @change="handleFile" type="file" placeholder="Tải file excel" accept=".xlsx, .xls" class="cursor-pointer !w-fit"/>
      </div>
      <form-item class="mb-0">
        <a-button
          v-if="dataJson.length === 0"
          class="w-full font-semibold"
          type="primary"
          html-type="submit"
        >
          Thêm
        </a-button>
      </form-item>
    </Form>
    <a-button
      v-if="dataJson.length > 0"
      class="w-full font-semibold"
      type="primary"
      @click="handleAddFromFile"
    >
      Thêm
    </a-button>
  </a-modal>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import Form from "@/components/Form.vue";
import FormItem from "@/components/FormItem.vue";
import InputTextNumber from "@/components/InputTextNumber.vue";
import {Genders} from "@/constants/Options";
import {fnJob} from "@/core/composables/useJob";
import {UpdateInfoRequest} from "@/models/Teacher";
import TeacherRepository from "@/repositories/TeacherRepository";
import {notification} from "ant-design-vue";
import {Rule} from "ant-design-vue/es/form/interface";
import dayjs from "dayjs";
import * as XLSX from 'xlsx';

const props = defineProps<{
  visible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}>();

const emit = defineEmits<{
  (e: "finish"): void;
}>();
const dataJson = ref<UpdateInfoRequest[]>([])

const { run: createTeacherAPI } = fnJob({
  api: (payload: any) => Array.isArray(payload) ? TeacherRepository.addListTeacher(payload) :   TeacherRepository.addTeacher(payload),
  fnSuccess: ({ data }) => {
    notification.success({
      message: "Tạo mới chuyên viên thành công",
    });
    emit("finish");
    props.handleOk();
  },
  fnError: () => {
    notification.error({
      message: "Tạo mới chuyên viên thất bại",
    });
  },
  options: {
    showLoading: true,
  },
});

const validatePhone = async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject("Bạn phải nhập số điện thoại");
  }

  const status = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(value.toString());
  if (!status) {
    return Promise.reject("Bạn phải nhập đúng số điện thoại");
  } else return Promise.resolve();
};

const handleFinish = (values: UpdateInfoRequest) => {
  createTeacherAPI(values);
};

const handleAddFromFile =  () => {
  createTeacherAPI(dataJson.value)
}

const handleFile = (event:any) => {
  try {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const data = e.target?.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          dataJson.value = XLSX.utils.sheet_to_json(worksheet, { blankrows: true, defval: null });
          console.log(dataJson.value)
        } catch (error) {
          console.error('Error processing Excel file:', error);
        }
      };

      reader.readAsBinaryString(file);
    }
    dataJson.value = []
  } catch (error) {
    console.error('Error handling file:', error);
  }
};

</script>

<style lang="scss" scoped></style>

<style lang="scss">
.modal-add-teacher {
  .ant-modal-body {
    padding: 30px 40px 40px;
  }

  label {
    font-size: 12px;
    font-weight: 500;
  }
}
</style>
