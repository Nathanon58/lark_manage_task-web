import { createContext } from "preact";
import UserMobx from "../mobx/UserMobx";

export const StoreContext = createContext(UserMobx);
export const StoreProvider = StoreContext.Provider;
