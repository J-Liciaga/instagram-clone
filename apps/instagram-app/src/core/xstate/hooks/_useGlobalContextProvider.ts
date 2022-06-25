import { useContext } from "react";
import GlobalContext from "../provider/_GlobalContext";

const useGlobalContextProvider = () => useContext(GlobalContext);

export default useGlobalContextProvider;
