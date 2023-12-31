<template>
  <div class="payment-graduation-collective">
    <div class="flex justify-center mb-[-24px] col-span-2">
      <div class="flex flex-row h-fit gap-3 sticky top-[100px]">
        <ButtonSave @click="pickApprover">Apply</ButtonSave>
        <ButtonReset btn-type="destructive" @click="resetForm"
        ></ButtonReset
        >
      </div>
    </div>
    <div class="col-span-10">
      <BankLoanLetter
        :initial-values="initialValues"
        ref="formLetter"
        @finish="handleFinish"
      />
    </div>
    <ModalApprover
      :visible="modalApprover"
      @cancel="closeModalApprover"
      @finish="submit"
    />
  </div>
</template>

<script lang="ts" setup>
import ButtonReset from "@/components/ButtonReset.vue";
import ButtonSave from "@/components/ButtonSave.vue";
import useJob from "@/core/composables/useJob";
import { useLoading } from "@/core/loading";
import BankLoanLetter from "@/letters/BankLoanLetter.vue";
import { BankLoanRequest } from "@/models/BankLoan";
import { FormService, StatusLetter } from "@/models/Letter";
import ModalApprover from "@/modules/user/components/modal/ModalApprover.vue";
import UserRoutePaths from "@/modules/user/router/paths";
import BankLoanRepository from "@/repositories/BankLoanRepository";
import { useAuth } from "@/stores/auth";
import { useUser } from "@/stores/user";
import { notification } from "ant-design-vue";
import dayjs from "dayjs";
import { storeToRefs } from "pinia";
import { catchError, map, of } from "rxjs";
import { onBeforeMount, ref, watch } from "vue";
import { useRouter } from "vue-router";
import {MIN_PAYMENT} from "@/utilities/const";

const formLetter = ref<FormService>();
const router = useRouter();
const { getInfoAccount } = useUser();
const { user: infoUser } = storeToRefs(useUser());
const { user } = storeToRefs(useAuth());
const initialValues = ref<any>({
  ...infoUser.value,
  birthDay: infoUser.value?.birthDay
    ? dayjs(infoUser.value?.birthDay).format("YYYY-MM-DD")
    : infoUser.value?.birthDay,
  dateCitizenId: infoUser.value?.dateCitizenId
    ? dayjs(infoUser.value?.dateCitizenId).format("YYYY-MM-DD")
    : infoUser.value?.dateCitizenId,
});
const { startLoading, stopLoading } = useLoading();
const modalApprover = ref<boolean>(false);
const approverId = ref<string>("");

const { run: submitConfirmStudying } = useJob(
  (payload: BankLoanRequest) => {
    return BankLoanRepository.create(payload).pipe(
      map(({ data }) => {
        router.push(UserRoutePaths.Index);
        if (data.success) {
          notification.success({ message: "Đơn đã nộp thành công !" });
        } else {
          notification.error({ message: "Đơn submit không thành công" });
        }
      }),
      catchError((err) => {
        notification.error({ message: "Đơn submit không thành công" });
        return of(err);
      })
    );
  },
  {
    showLoading: true,
  }
);

onBeforeMount(async () => {
  if (user?.value?.username) {
    startLoading();
    await getInfoAccount(user?.value?.username);
    stopLoading();
  }
});

watch(
  () => infoUser,
  () => {
    initialValues.value = {
      ...infoUser.value,
      birthDay: infoUser.value?.birthDay
        ? dayjs(infoUser.value?.birthDay).format("YYYY-MM-DD")
        : infoUser.value?.birthDay,
      dateCitizenId: infoUser.value?.dateCitizenId
        ? dayjs(infoUser.value?.dateCitizenId).format("YYYY-MM-DD")
        : infoUser.value?.dateCitizenId,
    };
  },
  {
    deep: true,
    immediate: true,
  }
);

const pickApprover = () => {
  modalApprover.value = true;
};

const closeModalApprover = () => {
  modalApprover.value = false;
};
const resetForm = () => {
  formLetter.value?.resetForm();
};
const handleFinish = (values: BankLoanRequest) => {
  if (user?.value?.userId) {
    const payload = {
      ...formLetter.value?.values,
      approved: approverId.value,
      user: user?.value?.userId,
      status: StatusLetter.PENDING,
    };
    submitConfirmStudying(payload);
  }
};

const submit = (approver: string | undefined) => {
  if(infoUser?.value?.balance && infoUser?.value?.balance >= MIN_PAYMENT) {
    closeModalApprover();
    if (approver) {
      approverId.value = approver;
    }
    handleFinish(initialValues.value)
  } else {
    notification.error({message: 'Số dư không đủ'})
  }
};


</script>

<style lang="scss">
.payment-graduation-collective {
  max-width: 1200px;
  @apply grid grid-cols-12 mx-auto;
  .title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  .letter {
    .title {
      h3 {
        text-align: center;
      }
    }

    .content-line {
      @apply flex items-baseline w-full flex-wrap;
      font-size: 13px;
      line-height: 20px;
    }
  }
}
</style>
