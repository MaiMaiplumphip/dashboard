<template>
  <div class="system_title d-flex justify-space-between">
    <dv-decoration-8 style="width:300px;height:50px;" />
    <div>
      <dv-decoration-7 style="width:150px;height:22px; margin: 0 auto;"> {{ SyStemModule.title }} </dv-decoration-7>
      <dv-decoration-5 style="width:600px;height:40px;" />
    </div>
    <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

import {SyStemModule} from '@/store/modules/system';

@Component
export default class System extends Vue {
  public SyStemModule = SyStemModule;
}
</script>

<style scoped lang="sass">
.system_title
	width: 100%
</style>
