declare interface StoreSystem_State<T> {
  title: T;
}

interface StoreSystem_Actions {}

interface StoreSystem_Mutations {}

declare interface StoreSystem<T> extends StoreSystem_State<T>, StoreSystem_Actions, StoreSystem_Mutations {}
