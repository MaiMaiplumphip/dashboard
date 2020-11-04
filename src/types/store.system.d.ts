declare interface StoreSystem_State {
  title: string;
}

interface StoreSystem_Actions {}

interface StoreSystem_Mutations {}

declare interface StoreSystem extends StoreSystem_State, StoreSystem_Actions, StoreSystem_Mutations {}
