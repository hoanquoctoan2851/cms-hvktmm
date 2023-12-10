<template>
  <a-tooltip placement="top" :title="t('common.detail')" v-if="onlyIcon">
    <a-button class="w-full" type="primary" v-bind="$attrs">
      <template #icon>
        <eye-outlined />
      </template>
      <span>Xem chi tiết</span>
    </a-button>
  </a-tooltip>
  <a-button class="w-full" type="primary" v-bind="$attrs" v-else>
    <template #icon>
      <eye-outlined />
    </template>
    <slot v-if="!onlyIcon">
      {{ t("common.detail") }}
    </slot>
  </a-button>
</template>

<script lang="ts" setup>
import Button, { ButtonProps } from "@/components/Button.vue";
import { EyeOutlined } from "@ant-design/icons-vue";
import { useI18n } from "vue-i18n";

export interface ButtonViewProps
  extends Omit<ButtonProps, "type" | "danger" | "success" | "warning"> {
  onlyIcon?: boolean;
}

defineProps<ButtonViewProps>();

const { t } = useI18n();
</script>
