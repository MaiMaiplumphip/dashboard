<template>
  <BottomSheet :fullscreen="true" title="组件添加">
    <!--    触发node    -->
    <template slot="triggerNode" slot-scope="{on, attrs}">
      <v-list-item link v-bind="attrs" v-on="on">
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>图表添加</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
    <!--    内容node    -->
    <template slot="content">
      <ChartsTable />
    </template>
  </BottomSheet>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import BottomSheet from '@/components/BottomSheet.vue';
import ChartsTable from '@/views/DrawerFunc/AddCharts/ChartsTab.vue';

@Component({
  components: {
    BottomSheet,
    ChartsTable,
  },
})
export default class AddCharts extends Vue {}
</script>
