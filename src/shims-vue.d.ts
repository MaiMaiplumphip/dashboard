declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

// declare module 'vue-grid-layout' {
//   namespace GridLayout {}
//   namespace GridItem {}
// }

// declare module '@jiaminghi/data-view';
declare module 'vue-count-to';

declare module 'echarts' {
  function init(dom: any): void;

  namespace graphic {
    function LinearGradient(a: any, b: any, c: any, d: any, e: any, f?: any): void;
    function extendShape(option: any);
    function registerShape(pos: string, options: any);
  }
}

declare module '@/utils/index' {
  export class Vue {
    $vuetify: {
      theme: {
        dark: boolean;
      };
    };

    $refs: any;

    $nextTick(callBackFunc: any): void;

    /**
     * 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
     */
    beforeCreated(): void;

    /**
     * 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
     */
    created(): void;

    /**
     * 在挂载开始之前被调用：相关的 render 函数首次被调用。
     */
    beforeMount(): void;

    /**
     * el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
     */
    mounted(): void;

    /**
     * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
     */
    beforeUpdate(): void;

    /**
     * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
     */
    updated(): void;

    /**
     * 实例销毁之前调用。在这一步，实例仍然完全可用。
     */
    beforeDestroy(): void;

    /**
     * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。
     */
    destroyed(): void;
  }

  export function Component(componentOptions: any): any;

  export function Emit(event: string, ...args: any[]): any;

  export function Inject(options: any): any;

  export function InjectReactive(options: any): any;

  export function Mixins(...args: any[]): any;

  export function Model(event: any, options: any): any;

  export function Prop(options?: any): any;

  export function PropSync(propName: any, options: any): any;

  export function Provide(key: any): any;

  export function ProvideReactive(key: any): any;

  export function Ref(refKey: any): any;

  export function Watch(variableName?: string, options?: any): any;
}

// declare module 'vuex' {
//   export class Store {
//     constructor(options: any);
//
//     commit(_type: any, _payload: any, _options?: any): void;
//
//     dispatch(_type: any, _payload: any): any;
//
//     hasModule(path: any): any;
//
//     hotUpdate(newOptions: any): void;
//
//     registerModule(path: any, rawModule: any, options: any): void;
//
//     replaceState(state: any): void;
//
//     subscribe(fn: any, options: any): any;
//
//     subscribeAction(fn: any, options: any): any;
//
//     unregisterModule(path: any): void;
//
//     watch(getter: any, cb: any, options: any): any;
//   }
//
//   export const version: string;
//
//   export function createLogger(ref: any): any;
//
//   export function createNamespacedHelpers(namespace: any): any;
//
//   export function install(_Vue: any): void;
//
//   export function mapActions(namespace: any, map: any): any;
//
//   export function mapGetters(namespace: any, map: any): any;
//
//   export function mapMutations(namespace: any, map: any): any;
//
//   export function mapState(namespace: any, map: any): any;
// }
