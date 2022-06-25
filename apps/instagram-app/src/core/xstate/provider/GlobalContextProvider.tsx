import * as React from "react";
import { useActor, useInterpret } from "@xstate/react";
import GlobalContext from "./_GlobalContext";
import { AuthMachine } from "../machines";

export interface GlobalContextProviderProps {
	children: React.ReactNode;
}

const GlobalContextProvider: React.FC<GlobalContextProviderProps> = React.memo(
	({ children }) => {
		const AuthMachibeServices = useInterpret(AuthMachine, {
			devTools: true,
		});

		return (
			<GlobalContext.Provider
				value={{
					auth: AuthMachibeServices,
				}}
			>
				{children}
			</GlobalContext.Provider>
		);
	},
);

export default GlobalContextProvider;
