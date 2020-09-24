<template>
  <BottomSheet width="30%" title="系统设置">
    <template slot="triggerNode" slot-scope="{on, attrs}">
      <v-list-item link v-bind="attrs" v-on="on">
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>系统设置</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
    <template slot="content">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="驾驶舱名称" required />

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
          提交
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          重置
        </v-btn>
      </v-form>
    </template>
  </BottomSheet>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import BottomSheet from '@/components/BottomSheet.vue';

@Component({
  components: {
    BottomSheet,
  },
})
export default class NavigationDrawer extends Vue {
  public valid = true;
  public name = '';
  public nameRules = [(v: any) => !!v || '驾驶舱名称为必填项', (v: any) => (v && v.length <= 10) || '驾驶舱名称不得超过10个字符'];

  public checkbox = false;

  public validate() {
    (this.$refs.form as any).validate();
  }
  public reset() {
    (this.$refs.form as any).reset();
  }
}
</script>
