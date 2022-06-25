import { createContext } from "react";
import type { AuthMachine } from "../machines/auth/Auth.machine";

interface GlobalContextProps {
	auth: AuthMachine;
}

const GlobalContext = createContext({} as GlobalContextProps);

export default GlobalContext;
