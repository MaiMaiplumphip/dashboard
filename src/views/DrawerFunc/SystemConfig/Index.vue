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

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required />

        <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required />

        <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required />

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
          提交
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          重置
        </v-btn>

        <v-btn color="warning" @click="resetValidation">
          Reset Validation
        </v-btn>
      </v-form>
    </template>
  </BottomSheet>
</template>

<script lang="ts">
import {Component, Vue} from '@/utils/index';
import BottomSheet from '@/components/BottomSheet.vue';

@Component({
  components: {
    BottomSheet,
  },
})
export default class NavigationDrawer extends Vue {
  public valid = true;
  public name = '';
  public nameRules = [v => !!v || '驾驶舱名称为必填项', v => (v && v.length <= 10) || '驾驶舱名称不得超过10个字符'];
  public email = '';
  public emailRules = [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'];
  public select = null;
  public items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  public checkbox = false;

  public validate() {
    this.$refs.form.validate();
  }
  public reset() {
    this.$refs.form.reset();
  }
  public resetValidation() {
    this.$refs.form.resetValidation();
  }
}
</script>
