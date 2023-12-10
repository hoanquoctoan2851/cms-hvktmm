<template>
  <div>
    <Header
      class="fixed z-50 top-0 left-0 right-0 w-screen"
      @hamburger-click="drawerVisible = true"
    />
    <div class="main-page">
      <SideBar
        class="main-page__side-bar fixed left-0 xl:pt-[104px] h-screen z-40"
        v-model:drawer-visible="drawerVisible"
      />
      <div class="main-page__main-content xl:pt-[104px]">
        <Suspense @fallback="startLoading" @resolve="stopLoading">
          <RouterView v-slot="{ Component, route }">
            <TransitionFade class="min-h-full" mode="out-in">
              <component :is="Component" :key="route.path" />
            </TransitionFade>
          </RouterView>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TransitionFade from "@/components/animation/TransitionFade.vue";
import {onMounted, ref} from "vue";
import { RouterView } from "vue-router";
import Header from "./Header.vue";
import SideBar from "./SideBar.vue";
import { useLoading } from "@/core/loading";
import {fnJob} from "@/core/composables/useJob";
import AdminRepository from "@/repositories/AdminRepository";
import {useAppStore} from "@/stores/app";

const drawerVisible = ref(false);
const { startLoading, stopLoading } = useLoading();

</script>

<style lang="scss" scoped>
.main-page {
  font-family: "Roboto", sans-serif;
  background-color: #f3f6f9;
  min-height: 100vh;

  @screen md {
    display: flex;
  }

  &__main-content {
    padding: 24px;
    padding-top: calc(60px + 24px);
    background: #f3f6f9;
    flex-grow: 1;
    position: relative;

    @screen md {
      padding-left: calc(240px + 24px);
      width: calc(100% - 264px);
    }
  }
}
</style>
