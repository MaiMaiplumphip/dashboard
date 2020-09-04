declare module '*.vue' {
  import Vue, {VueConstructor} from 'vue';
  interface $vuetify {}
  export default Vue;
}

declare module 'vue-grid-layout';
declare module 'vue-property-decorator' {
  export function Component(options: any): any;

  export function Emit(event: string, ...args: any[]): any;

  export function Inject(options: any): any;

  export function InjectReactive(options: any): any;

  export function Mixins(...args: any[]): any;

  export function Model(event: any, options: any): any;

  export function Prop(options: any): any;

  export function PropSync(propName: any, options: any): any;

  export function Provide(key: any): any;

  export function ProvideReactive(key: any): any;

  export function Ref(refKey: any): any;

  export function Watch(path: string, options: any): any;

  export namespace Component {
    function registerHooks(keys: any): void;
  }

  export namespace Vue {
    class FunctionalRenderContext {
      constructor(data: any, props: any, children: any, parent: any, Ctor: any);
    }

    namespace config {
      const async: boolean;

      const devtools: boolean;

      const errorHandler: any;

      const ignoredElements: any[];

      const keyCodes: {};

      const performance: boolean;

      const productionTip: boolean;

      const silent: boolean;

      const warnHandler: any;

      function getTagNamespace(tag: any): any;

      function isReservedAttr(val: any): any;

      function isReservedTag(tag: any): any;

      function isUnknownElement(tag: any): any;

      function mustUseProp(tag: any, type: any, attr: any): any;

      function parsePlatformTagName(_: any): any;

      namespace optionMergeStrategies {
        function activated(parentVal: any, childVal: any): any;

        function beforeCreate(parentVal: any, childVal: any): any;

        function beforeDestroy(parentVal: any, childVal: any): any;

        function beforeMount(parentVal: any, childVal: any): any;

        function beforeUpdate(parentVal: any, childVal: any): any;

        function components(parentVal: any, childVal: any, vm: any, key: any): any;

        function computed(parentVal: any, childVal: any, vm: any, key: any): any;

        function created(parentVal: any, childVal: any): any;

        function data(parentVal: any, childVal: any, vm: any): any;

        function deactivated(parentVal: any, childVal: any): any;

        function destroyed(parentVal: any, childVal: any): any;

        function directives(parentVal: any, childVal: any, vm: any, key: any): any;

        function el(parent: any, child: any, vm: any, key: any): any;

        function errorCaptured(parentVal: any, childVal: any): any;

        function filters(parentVal: any, childVal: any, vm: any, key: any): any;

        function inject(parentVal: any, childVal: any, vm: any, key: any): any;

        function methods(parentVal: any, childVal: any, vm: any, key: any): any;

        function mounted(parentVal: any, childVal: any): any;

        function props(parentVal: any, childVal: any, vm: any, key: any): any;

        function propsData(parent: any, child: any, vm: any, key: any): any;

        function provide(parentVal: any, childVal: any, vm: any): any;

        function serverPrefetch(parentVal: any, childVal: any): any;

        function updated(parentVal: any, childVal: any): any;

        function watch(parentVal: any, childVal: any, vm: any, key: any): any;
      }
    }

    namespace util {
      function defineReactive(obj: any, key: any, val: any, customSetter: any, shallow: any, ...args: any[]): any;

      function extend(to: any, _from: any): any;

      function mergeOptions(parent: any, child: any, vm: any): any;

      function warn(msg: any, vm: any): void;
    }
  }
}
declare module 'vuex-class';
declare module '@jiaminghi/data-view';
declare module 'echarts';
declare module '@/utils/index';

declare module 'vuex' {
  export class Store {
    constructor(options: any);

    commit(_type: any, _payload: any, _options?: any): void;

    dispatch(_type: any, _payload: any): any;

    hasModule(path: any): any;

    hotUpdate(newOptions: any): void;

    registerModule(path: any, rawModule: any, options: any): void;

    replaceState(state: any): void;

    subscribe(fn: any, options: any): any;

    subscribeAction(fn: any, options: any): any;

    unregisterModule(path: any): void;

    watch(getter: any, cb: any, options: any): any;
  }

  export const version: string;

  export function createLogger(ref: any): any;

  export function createNamespacedHelpers(namespace: any): any;

  export function install(_Vue: any): void;

  export function mapActions(namespace: any, map: any): any;

  export function mapGetters(namespace: any, map: any): any;

  export function mapMutations(namespace: any, map: any): any;

  export function mapState(namespace: any, map: any): any;
}
