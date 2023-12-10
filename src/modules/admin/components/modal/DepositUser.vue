<template>
  <div class="pt-2">
    <a-button class="w-full" type="primary" @click="states.visible = true">Nạp tiền</a-button>
    <a-modal centered v-model:visible="states.visible" :title="'Nạp tiền cho sinh viên ' + dataUser?.name">
      <a-input-number v-model:value="states.money"></a-input-number>
      <template #footer>
        <div>
          <a-button type="red">Hủy</a-button>
          <a-button @click="handleDeposit" type="green">Xác nhận</a-button>
        </div>
      </template>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import {reactive, defineProps} from "vue";
import {fnJob} from "@/core/composables/useJob";
import UserRepository from "@/repositories/UserRepository";
import {notification} from "ant-design-vue";

const states = reactive({
  visible: false,
  money: 0
})

const props =defineProps({
  dataUser: {
    type: Object,
    default: {}
  }
})


const { run: depositApi } = fnJob({
  api: (msv: string, payload: any) =>
    UserRepository.depositUser(msv, payload),
  fnSuccess: (data) => {
    notification.success({
      message: "Nạp tiền thành công",
    });
    states.visible = false
  },
  fnError: (err) => {
    notification.error({
      placement: "topRight",
      message: "Nạp tiền thất bại!",
    });
  },
  options: {
    showLoading: true,
  },
});

const handleDeposit = () => {
  depositApi(props.dataUser.msv, {balance: states.money})
}


</script>
