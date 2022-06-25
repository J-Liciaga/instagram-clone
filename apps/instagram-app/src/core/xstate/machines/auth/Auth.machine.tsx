import * as XState from "xstate";
import { createModel } from "xstate/lib/model";

const AuthModel = createModel(undefined, {
	context: {},
	events: {},
});

const machine_idle_state = "#auth-machine.idle";

const AuthMachine = AuthModel.createMachine({}, {});

export type AuthMachine = XState.ActorRefFrom<typeof AuthMachine>;

export default AuthMachine;
