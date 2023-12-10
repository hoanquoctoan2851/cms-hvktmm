<template>
  <a-button type="green">
    <edit-outlined />
    {{ t("common.edit") }}
  </a-button>
</template>

<script lang="ts" setup>
import { EditOutlined } from "@ant-design/icons-vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
