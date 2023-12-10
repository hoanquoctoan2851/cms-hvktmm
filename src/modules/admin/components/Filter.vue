<template>
  <div class="filter">
    <Form layout="vertical" @finish="handleFinish">
      <FormItem name="name" label="Họ tên chuyên viên" input="a-input" />
      <a-row :gutter="[16, 0]">
      </a-row>
      <div class="flex mt-4 justify-center">
        <FormItem>
          <Button class="mr-2" :btn-type="'destructive'">Reset</Button>
        </FormItem>
        <FormItem>
          <Button :btn-type="'primary'" html-type="submit">Tìm kiếm</Button>
        </FormItem>
      </div>
    </Form>
  </div>
</template>

<script lang="ts" setup>
import Button from "@/components/button/Button.vue";
import Form from "@/components/Form.vue";
import FormItem from "@/components/FormItem.vue";
import { Majors, StatusLetterOptions } from "@/constants/Options";
import { StatusLetter } from "@/models/custom";
import { reactive, UnwrapRef } from "vue";

interface FormState {
  name: string;
  majors: string;
  maSV: string;
  class: string;
  statusLetter: StatusLetter | undefined;
}

const defaultValueForm = (): FormState => ({
  name: "",
  maSV: "",
  majors: "",
  class: "",
  statusLetter: undefined,
});

const formState: UnwrapRef<FormState> = reactive(defaultValueForm());

const handleFinish = (values: any) => {};
</script>

<style lang="scss" scoped>
.filter {
  background: #ffffff;
  border-radius: 5px;
  padding: 32px;
  box-shadow: 0px 4px 15px rgba(181, 181, 195, 0.25);

  :deep(.ant-form-item) {
    margin-bottom: 16px;

    .ant-form-item-label label {
      font-weight: 500;
      font-size: 13px;
      line-height: 15px;
      color: #202223;
    }
  }
}
</style>
