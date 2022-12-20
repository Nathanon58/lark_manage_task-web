import { StoreContext } from './store-provider';
import { useContext } from "preact/hooks";

export const useStore = () => useContext(StoreContext);
