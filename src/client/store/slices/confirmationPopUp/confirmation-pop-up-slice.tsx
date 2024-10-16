import { createProducer } from "@rbxts/reflex";

interface State {
	Active: boolean;

	Question: string;
	AcceptText: string;
	CancelText: string;

	AcceptCallback: () => void;
	CancelCallback: () => void;
}

const initialState: State = {
	Active: false,
	Question: "Are you sure you want to do this?",
	AcceptText: "Accept",
	CancelText: "Cancel",

	AcceptCallback: () => {
		print("Accept clicked");
	},
	CancelCallback: () => {
		print("Cancel clicked");
	},
};

export const confirmationPopUpSlice = createProducer(initialState, {
	setConfirmationQuestion: (state, question: string) => {
		return { ...state, Question: question };
	},
	setConfirmationAcceptText: (state, acceptText: string) => {
		return { ...state, AcceptText: acceptText };
	},
	setConfirmationCancelText: (state, cancelText: string) => {
		return { ...state, CancelText: cancelText };
	},
	setConfirmationAcceptCallback: (state, acceptCallback: () => void) => {
		return { ...state, AcceptCallback: acceptCallback };
	},
	setConfirmationCancelCallback: (state, cancelCallback: () => void) => {
		return { ...state, CancelCallback: cancelCallback };
	},

	setConfirmationActive: (state, active: boolean) => {
		return { ...state, Active: active };
	},
});
