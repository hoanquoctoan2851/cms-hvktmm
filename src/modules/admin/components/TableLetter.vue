<template>
  <div class="table-letters">
    <ModalCheckLetter
      :data="modalCheckLetter.data"
      :visible="modalCheckLetter.visible"
      :type-letter="modalCheckLetter.typeLetter"
      :code="modalCheckLetter.id"
      @cancel="closeModalCheckLetter"
      @change="closeModalCheckLetter"
    />
    <a-table
      :data-source="dataSource"
      :scroll="{ x: 'max-content' }"
    >
      <a-table-column title="STT" data-index="stt">
        <template #default="{ index }">
          <span>{{ index + 1 }}</span>
        </template>
      </a-table-column>
      <a-table-column title="Loại đơn" data-index="nameLetter">
      </a-table-column>

      <a-table-column title="Người gửi đơn">
        <template #default="{ record }">
          <Avatar
            :name="record.user?.name || record.name"
            :name-face="getNameFace(record.user?.name || record.name)"
            :color="randomColor(record.user?.phone || record.phone)"
            size="small"
          />
        </template>
      </a-table-column>
      <a-table-column title="Số điện thoại" align="center">
        <template #default="{ record }">
          {{ record.user?.phone || record?.phone }}
        </template>
      </a-table-column>
      <a-table-column title="Ngày gửi" data-index="createdAt">
        <template #default="{ text }">
          {{ dayjs(text).format("DD/MM/YYYY") }}
        </template>
      </a-table-column>
      <a-table-column title="Trạng thái" data-index="status">
        <template #default="{ record }">
          <a-tag
            class="w-[70px]"
            :key="record.status"
            :color="
              record.status === StatusLetter.PENDING
                ? 'geekblue'
                : record.status === StatusLetter.SUCCESS
                ? 'green'
                : 'volcano'
            "
          >
            {{ record.status.toString().toUpperCase() }}
          </a-tag>
        </template>
      </a-table-column>
      <a-table-column title="Hành động" align="center">

        <template #default="{ record }">
          <span>
            <a-button class="!h-[32px]" type="primary" @click="handleEdit(record)">Chi tiết</a-button>
          </span>
        </template>
      </a-table-column>
    </a-table>
  </div>
</template>

<script lang="ts" setup>
import TableColAction from "@/components/TableColAction.vue";
import { StatusLetter, TypeLetter } from "@/models/Letter";
import ModalCheckLetter from "@/modules/admin/components/modal/ModalCheckLetter.vue";
import { ColumnProps } from "ant-design-vue/lib/table";
import dayjs, { Dayjs } from "dayjs";
import { ref
, computed} from "vue";
import {getNameFace, randomColor} from "@/utilities/resolveLetter";
import Avatar from "@/components/Avatar.vue";
import TableAction from "@/components/TableAction.vue";


const prop = defineProps({
  dataSource: {
    type: Array,
    default: []
  }
})

const emit = defineEmits(['fetchData'])

interface Letter {
  code: string;
  name: string;
  sendDay: Dayjs | string;
  status: StatusLetter;
  typeLetter?: TypeLetter;
}

const columns: ColumnProps<any>[] = [
  {
    title: "Mã đơn",
    dataIndex: "code",
    key: "code",
    width: 70,
  },
  {
    title: "Tên đơn",
    dataIndex: "name",
    key: "name",
    width: 300,
  },
  {
    title: "Ngày gửi",
    dataIndex: "sendDay",
    key: "sendDay",
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Hành động",
    dataIndex: "action",
    key: "action",
    align: "center",
  },
];

interface ModalLetterParameters {
  data: any;
  visible: boolean;
  id: string;
  typeLetter: TypeLetter;
}
const modalCheckLetter = ref<ModalLetterParameters>({
  data: null,
  visible: false,
  id: "",
  typeLetter: null,
});


const openModalCheckLetter = (info: ModalLetterParameters) => {
  modalCheckLetter.value = {
    ...info,
    visible: true,
  };
};

const closeModalCheckLetter = () => {
  modalCheckLetter.value.visible = false;
};

const handleEdit = (record:any) => {
  openModalCheckLetter({
    data: record,
    id: record.nameLetter,
    typeLetter: record.typeLetter,
    visible: true,
  });
};

const handleDelete = ({
  code,
  typeLetter,
}: {
  code: string;
  typeLetter: TypeLetter;
}) => {};
</script>

<style lang="scss" scoped></style>

<style lang="scss" scoped>
.table-letters {
  background: #ffffff;
  border-radius: 5px;
  padding: 32px;
  box-shadow: 0px 4px 15px rgba(181, 181, 195, 0.25);
  min-height: 100%;
  width: 100%;
}
</style>
