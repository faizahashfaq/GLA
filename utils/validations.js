/** @format */
import { showMessage, hideMessage } from "react-native-flash-message";
export const emailValidation = (text) => {
	let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	console.log(text);
	if (reg.test(text)) {
		return true;
	} else {
		showMessage({
			message: "Email is not correct",
			type: "danger",
			description:
				"Email should have '@' and should end with '.' e.g. glaapp@gla.com",
		});
		return false;
	}
};

export const emptyInputValidation = (text) => {
	if (text.length === 0) {
		showMessage({
			message: "Text field can not be empty",
			type: "danger",
		});
		return false;
	} else {
		return true;
	}
};

export const passwordSecurityCheck = (text) => {
	const regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;

	if (text.length >= 8 && regex.test(text)) {
		return true;
	} else {
		showMessage({
			message: "Password must be strong",
			type: "warning",
		});
		return false;
	}
};
