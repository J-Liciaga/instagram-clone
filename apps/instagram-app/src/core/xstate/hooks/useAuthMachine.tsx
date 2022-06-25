import { useActor } from "@xstate/react";
import useGlobalContextProvider from "./_useGlobalContextProvider";

const useAuthMachine = () => {
	const { auth } = useGlobalContextProvider();
	const [current, send] = useActor(auth);

	const authEventHandler = payload => send(payload);
	const authStateHandler = current;

	return {
		authEventHandler,
		authStateHandler,
	};
};

export default useAuthMachine;
