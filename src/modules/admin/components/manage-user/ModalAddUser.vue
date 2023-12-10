<template>
  <a-modal
    class="modal-add-user"
    :visible="props.visible"
    title="Thêm sinh viên"
    @cancel="props.handleCancel"
    destroy-on-close
    width="900px"
    :footer="null"
  >
    <Form  :disabled="dataJson.length > 0" layout="vertical" @finish="handleFinish">
      <a-row :gutter="24">
        <a-col :span="6">
          <form-item
            name="msv"
            label="Mã sinh viên"
            input="a-input"
            :rules="[{ required: true, message: 'Bạn phải nhập mã sinh viên' }]"
          />
        </a-col>
        <a-col :span="6">
          <form-item
            name="name"
            label="Họ tên"
            input="a-input"
            :rules="[
              { required: true, message: 'Bạn phải nhập họ tên sinh viên' },
            ]"
          />
        </a-col>
        <a-col :span="6">
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
        <a-col :span="6">
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
              style="width: 100% !important;"
              :value="value"
              @update:value="handleChange"
              format="DD/MM/YYYY"
              placeholder="DD/MM/YYYY"
            />
          </form-item>
        </a-col>

        <a-col :span="6">
          <form-item
            name="class"
            label="Lớp"
            input="a-input"
            :rules="[{ required: true, message: 'Bạn phải nhập lớp' }]"
          />
        </a-col>
        <a-col :span="6">
          <form-item
            name="majors"
            label="Ngành"
            input="a-select"
            :input-props="{ options: Majors, placeholder: 'Chọn ngành' }"
            :rules="[{ required: true, message: 'Bạn phải chọn ngành' }]"
          />
        </a-col>

        <a-col :span="6">
          <form-item
            name="timeCourse"
            label="Khóa"
            input="a-input"
            :rules="[{ required: true, message: 'Bạn phải nhập khóa' }]"
          />
        </a-col>
        <a-col :span="6">
          <form-item
            name="citizenId"
            label="Số căn cước"
            input="a-input"
            :rules="[{ required: true, message: 'Bạn phải nhập số căn cước' }]"
          />
        </a-col>
        <a-col :span="6">
          <form-item
            name="dateCitizenId"
            label="Ngày cấp căn cước"
            v-slot="{ value, handleChange }"
            :rules="[{ required: true, message: 'Bạn phải nhập ngày cấp căn cước' }]"
            :value-transformer="{
              in: (value) => (value ? dayjs(value) : value),
              out: (value) => dayjs(value).format('YYYY-MM-DD'),
            }"
          >
            <a-date-picker
              style="width: 100% !important;"
              :value="value"
              @update:value="handleChange"
              format="DD/MM/YYYY"
              placeholder="DD/MM/YYYY"
            />
          </form-item>
        </a-col>
        <a-col :span="6">
          <form-item
            name="placeCitizenId"
            label="Nơi cấp căn cước"
            input="a-input"
            :rules="[{ required: true, message: 'Bạn phải nhập nơi cấp căn cước' }]"
          />
        </a-col>
        <a-col :span="6">
          <form-item
            name="email"
            label="Email"
            input="a-input"
            :rules="[{ required: true, message: 'Bạn phải nhập email' }]"
            :input-props="{ type: 'email' }"
          />
        </a-col>
        <a-col :span="6">
          <form-item
            name="address"
            label="Địa chỉ"
            input="a-input"
            :input-props="{ type: 'a-input' }"
          />
        </a-col>
        <a-col :span="6">
          <form-item
            name="hometown"
            label="Quê quán"
            input="a-input"
            :input-props="{ type: 'a-input' }"
          />
        </a-col>
        <a-col :span="6">
          <form-item
            name="permanentResidence"
            label="Địa chỉ thường trú"
            input="a-input"
            :input-props="{ type: 'a-input' }"
          />
        </a-col>
        <a-col :span="6">
          <form-item
            name="parentName"
            label="Họ tên bố/mẹ"
            input="a-input"
            :input-props="{ type: 'a-input' }"
          />
        </a-col>
        <a-col :span="6">
          <form-item
            name="parentPhone"
            label="Số điện thoại bố/mẹ"
            input="a-input"
            :input-props="{ type: 'a-input' }"
          />
        </a-col>
      </a-row>
      <div class="flex flex-col gap-3 py-3">
        <p>Nhập thông tin bằng file:</p>
        <input id="fileInput" @change="handleFile" type="file" placeholder="Tải file excel" accept=".xlsx, .xls" class="cursor-pointer !w-fit"/>
      </div>
      <form-item hide-text-error>
        <a-button
          v-if="dataJson.length === 0"
          class="w-full font-semibold mt-2"
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
import Form from "@/components/Form.vue";
import FormItem from "@/components/FormItem.vue";
import { Genders, Majors } from "@/constants/Options";
import { fnJob } from "@/core/composables/useJob";
import { CreateUserRequest } from "@/models/User";
import UserRepository from "@/repositories/UserRepository";
import { notification } from "ant-design-vue";
import dayjs from "dayjs";
import * as XLSX from "xlsx";
import {ref} from "vue";
import {UpdateInfoRequest} from "@/models/Teacher";
import TeacherRepository from "@/repositories/TeacherRepository";

const props = defineProps<{
  visible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}>();

const emit = defineEmits<{
  (e: "finish"): void;
}>();
const dataJson = ref<CreateUserRequest[]>([])

const { run: createUserAPI } = fnJob({
  api: (payload: CreateUserRequest | CreateUserRequest[] ) => Array.isArray(payload) ? UserRepository.addListUser(payload) :   UserRepository.addUser(payload),
  fnSuccess: ({ data }) => {
    props.handleOk();
    notification.success({
      message: "Tạo mới user thành công",
    });
    emit("finish");
  },
  fnError: () => {
    notification.error({
      message: "Tạo mới user thất bại",
    });
  },
  options: {
    showLoading: true,
  },
});

const handleFinish = (values: CreateUserRequest) => {
  createUserAPI(values);
};

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

const handleAddFromFile =  () => {
  createUserAPI(dataJson.value)
}
</script>

<style lang="scss" scoped></style>

<style lang="scss">
.modal-add-user {
  .ant-modal-body {
    padding: 30px 24px 40px;
  }

  label {
    font-size: 12px;
    font-weight: 500;
  }
}
</style>
