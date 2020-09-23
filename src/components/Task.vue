<template>
  <div class="TaskBox kanBanComponentBox d-flex flex-column">
    <!--    <dv-decoration-3 style="width:250px;height:30px;" class="star" />-->
    <div class="title">{{ option.title }}</div>
    <div class="taskList">
      <div class="taskItem" v-for="item in option.children" :key="item.echartId">
        <dv-border-box-7>
          <v-scroll-board :option="item.option" />
        </dv-border-box-7>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Task extends Vue {
  @Prop()
  private option?: {
    title: string;
    children: Example[];
  };
}
</script>

<style scoped lang="sass">
.TaskBox
  position: relative
  .title
    height: 50px
    text-align: center
    margin-top: 22px
  .star
    position: absolute
    left: 10px
    top: 20px
    width: 40px
    height: 20px
  .taskList
    flex: 1
    display: flex
    .taskItem
      flex: 1
      box-sizing: border-box
</style>
