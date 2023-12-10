<template>
  <div class="comp-signature mt-2">
    <p class="text-lg font-semibold">Người duyệt đơn</p>
    <p>Ký rõ họ tên:</p>
    <img  class="w-24 h-24 bg-blend-lighten" :src="signature" alt=""/>
  </div>
</template>
<script lang="ts">
import {useAppStore} from "@/stores/app";
import {computed} from "vue";
export default {
  setup() {
    const signature = computed(() => {
      console.log(useAppStore().signature)
      return useAppStore().signature
    })
    return {
      signature
    }
  }
}
</script>
