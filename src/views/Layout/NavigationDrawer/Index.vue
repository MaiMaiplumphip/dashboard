<template>
  <div>
    <v-navigation-drawer v-model="flag" app clipped :right="true" width="150">
      <v-list dense>
        <AddChart />
        <SystemConfig />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

import AddChart from '@/views/DrawerFunc/AddCharts/Index.vue';
import SystemConfig from '@/views/DrawerFunc/SystemConfig/Index.vue';

@Component({
  components: {AddChart, SystemConfig},
})
export default class NavigationDrawer extends Vue {
  @Prop()
  private flag?: boolean;
}
</script>
