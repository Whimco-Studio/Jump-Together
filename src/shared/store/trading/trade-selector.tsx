import { SharedState } from "shared/store";

export const getActive = (state: SharedState) => state.template.Active;
