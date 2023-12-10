<template>
  <div class="admin-index">
    <a-row :gutter="[20, 20]">
      <a-col :span="8">
        <Filter @change="changeFilter" />
      </a-col>
      <a-col :span="16">
        <div class="table">
          <TableLetter :dataSource="dataLetters" @refresh="refreshTable" @fetchData="getAllLetter" />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import Filter from "@/modules/admin/components/Filter.vue";
import TableLetter from "@/modules/admin/components/TableLetter.vue";
import {useRoute, useRouter} from "vue-router";
import {fnJob} from "@/core/composables/useJob";
import AdminRepository from "@/repositories/AdminRepository";
import {getTableLetter} from "@/utilities/resolveLetter";
import {StatusLetter} from "@/models/custom";
import {onMounted, ref, watch} from "vue";
import {useAuth} from "@/stores/auth";

export interface ListRequest {
    status?: StatusLetter;
    name?: string;
    msv?: string;
}

const router = useRouter();
const route = useRoute();
const dataLetters = ref<any[]>([]);

const { user } = useAuth();
const filterData = ref<ListRequest>({});

const { run: getAllLetter } = fnJob({
    api: ( payload: ListRequest) =>
        AdminRepository.getAllLetterApply( payload),
    fnSuccess: ({ data }) => {
        dataLetters.value = getTableLetter(data.data);
    },
    options: {
        showLoading: true,
    },
});

onMounted(() => {
    getAllLetter(filterData.value);
})

const refreshTable = () => {
    getAllLetter( filterData.value);
};

const changeFilter = (values: ListRequest) => {
    filterData.value = values;
};

watch(
    filterData,
    () => {
        router.push({
            path: route.path,
            query: filterData.value,
        });

        getAllLetter(filterData.value);
    },
    { immediate: true }
);

</script>
<style lang="scss" scoped>
.admin-index {
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 24px;
  .table {
    width: 100%;
    height: 100%;
  }
}
</style>
