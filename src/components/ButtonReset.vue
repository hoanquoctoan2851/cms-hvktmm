<template>
  <a-button type="red">
    <div class="flex flex-row items-center gap-2">
      <sync-outlined />
      <span>Reset</span>
    </div>
  </a-button>
</template>

<script lang="ts" setup>
import { SyncOutlined } from "@ant-design/icons-vue";
import { useI18n } from "vue-i18n";

export interface ButtonSaveProps
  extends Omit<ButtonProps, "type" | "danger" | "success" | "warning"> {}

defineProps<ButtonSaveProps>();

const { t } = useI18n();
</script>
