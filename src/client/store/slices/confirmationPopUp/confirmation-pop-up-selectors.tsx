import { RootState } from "client/store";

export const getConfirmationActive = (state: RootState) => {
	return state.confirmationPopUp.Active;
};

export const getConfirmationQuestion = (state: RootState) => {
	return state.confirmationPopUp.Question;
};

export const getConfirmationAcceptText = (state: RootState) => {
	return state.confirmationPopUp.AcceptText;
};

export const getConfirmationCancelText = (state: RootState) => {
	return state.confirmationPopUp.CancelText;
};

export const getConfirmationAcceptCallback = (state: RootState) => {
	return state.confirmationPopUp.AcceptCallback;
};

export const getConfirmationCancelCallback = (state: RootState) => {
	return state.confirmationPopUp.CancelCallback;
};
