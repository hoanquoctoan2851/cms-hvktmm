<template>
  <div class="login-layout">
    <div class="bg-login">
    </div>
    <div class="absolute w-full h-full top-0" style="background: rgba(0,0,0,0.6)">
    </div>
    <div class="w-full h-full flex m-auto z-10 p-6">
      <div class="w-full max-w-[1200px] rounded-lg overflow-hidden grid grid-cols-1 xl:grid-cols-2 m-auto z-10" style="box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);">
        <div class="hidden xl:flex bg-blue-200">
          <div class="flex-col w-[60%] flex m-auto gap-6">
            <p class="uppercase text-[24px] font-bold text-amber-600  text-center">TRường đại học công nghệ giao thông vận tải</p>
            <img class="object-contain" src="@/assets/images/logo.png" alt="" />
          </div>
        </div>
        <div class="login-layout__content w-full xl:aspect-square bg-neutral-100">
          <Suspense>
            <RouterView />
            <template #fallback>
              <div class="loading-container">
                <LoadingGlobal />
              </div>
            </template>
          </Suspense>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Assets from "@/assets";
import LoadingGlobal from "@/shared/loading/LoadingGlobal.vue";
</script>

<style lang="scss" scoped>
.login-layout {
  @apply flex w-screen h-screen;
.bg-login {
  background-image: url("../../assets/images/bg-login.jpg");
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
  &__content {
    border: 0.5px solid #c4c4c4;
    padding: 24px;
    position: relative;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    .loading-container {
      @apply w-full h-full flex justify-center items-center;
      max-height: calc(100% - 30px);
    }
  }
}
</style>
