<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class SvgIcon extends Vue {
  @Prop()
  private iconClass?: string;
  @Prop()
  private className?: string;

  private get iconName() {
    return `#icon-${this.iconClass}`;
  }

  private get svgClass(): string {
    if (this.className) {
      return 'svg-icon ' + (this.className as string);
    } else {
      return 'svg-icon';
    }
  }
}

// export default {
//   name: 'svgIcon',
//   props: {
//     iconClass: {
//       type: String,
//       required: true,
//     },
//     className: {
//       type: String,
//       default: '',
//     },
//   },
//   computed: {
//     iconName() {
//       return `#icon-${this.iconClass}`;
//     },
//     svgClass() {
//       if (this.className) {
//         return 'svg-icon ' + this.className;
//       } else {
//         return 'svg-icon';
//       }
//     },
//   },
// };
</script>

<style scoped lang="sass">
.svg-icon
  width: 1em
  height: 1em
  fill: currentColor
  overflow: hidden
</style>
