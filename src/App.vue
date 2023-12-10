<script setup lang="ts">
import ErrorBoundary from "@/core/components/ErrorBoundary.vue";
import { LoadingProvider } from "@/core/loading";
import ApiLoadingHandlerProvider from "@/core/providers/ApiLoadingHandlerProvider.vue";
import antViLocale from "@/localization/locales/vi/antLocale";
import ApiErrorHandlerProvider from "@/providers/ApiErrorHandlerProvider.vue";
import AuthHandlerProvider from "@/providers/AuthHandlerProvider.vue";
import { computed } from "@vue/reactivity";
import antEnLocale from "ant-design-vue/es/locale/en_US";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/vi";
import {onMounted, watchEffect} from "vue";
import { useI18n } from "vue-i18n";
import { RouterView } from "vue-router";
import {fnJob} from "@/core/composables/useJob";
import AdminRepository from "@/repositories/AdminRepository";
import {useAppStore} from "@/stores/app";

const { locale } = useI18n();

const antLocale = computed(() => {
  if (locale.value === "en") {
    return antEnLocale;
  }

  return antViLocale;
});

watchEffect(() => {
  dayjs.locale(locale.value);
  document.querySelector("html")?.setAttribute("lang", locale.value);
});

const { run: getInfoAdmin } = fnJob({
  api: (id: string) => AdminRepository.getInfoAdmin(id),
  fnSuccess: ({ data }) => {
    useAppStore().setSignature(data.data[0]?.signature)
  },
  options: {
    showLoading: true,
  },
});

onMounted(() => {
  getInfoAdmin('6573e535358a8c737090c7f6')
})

const onError = (error: Error) => {
  console.error(error);
};
</script>

<template>
  <ErrorBoundary @error="onError">
    <template #fallback="{ error }"> Error Captured {{ error }} </template>
    <a-config-provider :locale="antLocale">
      <LoadingProvider>
        <ApiLoadingHandlerProvider>
          <ApiErrorHandlerProvider>
            <AuthHandlerProvider>
              <RouterView />
            </AuthHandlerProvider>
          </ApiErrorHandlerProvider>
        </ApiLoadingHandlerProvider>
      </LoadingProvider>
    </a-config-provider>
  </ErrorBoundary>
</template>
