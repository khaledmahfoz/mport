import { useState } from "react";

import { values, entries } from "../../utils/polyfill_Object";

import Container from "../Container/Container";
import SectionHeader from "../SectionHeader/SectionHeader";
import FormInput from "../FormInput/FormInput";

function Contact() {
	const formElemsObj = {
		name: {
			label: "Please enter your name",
			value: "",
			valid: false,
			errMessage: "",
			elemType: "input",
			configs: {
				type: "text",
				name: "name",
				autoComplete: "on",
				id: "name",
			},
			validationConfigs: {
				notEmpty: {
					value: true,
					message: "please enter a valid name",
				},
			},
		},
		email: {
			label: "Please enter your email",
			value: "",
			valid: false,
			errMessage: "",
			elemType: "input",
			configs: {
				type: "email",
				name: "email",
				autoComplete: "on",
				id: "email",
			},
			validationConfigs: {
				isEmail: {
					value: true,
					message: "please enter a valid email",
				},
			},
		},
		message: {
			label: "Please enter your message",
			value: "",
			valid: false,
			errMessage: "",
			elemType: "textarea",
			configs: {
				name: "message",
				type: "textarea",
				id: "message",
			},
			validationConfigs: {
				notEmpty: {
					value: true,
					message: "please enter your message",
				},
			},
		},
	};

	values();
	entries();
	const [formElems, formElemsHandler] = useState(formElemsObj);
	const [formValidity, formValidityHandler] = useState(false);

	const validationConfigs = (value, configs) => {
		let isValid = true;
		let message = "";
		if (configs.notEmpty) {
			isValid = value !== "" && isValid;
			message = configs.notEmpty.message;
			return {
				isValid: isValid,
				message: message,
			};
		}

		if (configs.isEmail) {
			const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			isValid = emailRegex.test(value) && isValid;
			message = configs.isEmail.message;
			return {
				isValid: isValid,
				message: message,
			};
		}
	};

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
			)
			.join("&");
	};

	const emptyFields = () => {
		const updatedState = { ...formElems };
		Object.keys(updatedState).forEach((name) => {
			const updatedField = { ...updatedState[name] };
			updatedField.value = "";
			updatedState[name] = updatedField;
		});
		formElemsHandler(updatedState);
	};

	const submitHandler = (e) => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": "contact",
				name: formElems.name.value,
				email: formElems.email.value,
				message: formElems.message.value,
			}),
		})
			.then(() => {
				emptyFields();
				alert("Thank you");
			})
			.catch((error) => {
				emptyFields();
				alert(error);
			});
		e.preventDefault();
	};

	const changeHandler = (e) => {
		const { name, value } = e.target;
		const updatedState = { ...formElems };
		const updatedElem = { ...formElems[name] };
		const { isValid, message } = validationConfigs(
			value,
			formElems[name].validationConfigs
		);
		updatedElem.value = value;
		updatedElem.valid = isValid;
		updatedElem.errMessage = message;
		updatedState[name] = updatedElem;
		let formValidityState = Object.values(updatedState).map((data) => {
			return data.valid;
		});
		let checkValidity = formValidityState.filter((elem) => !elem);
		formElemsHandler(updatedState);
		formValidityHandler(checkValidity.length <= 0);
	};

	const checkValidity = (e) => {
		const { name, value } = e.target;
		const updatedState = { ...formElems };
		const updatedElem = { ...formElems[name] };
		const { isValid, message } = validationConfigs(
			value,
			formElems[name].validationConfigs
		);
		updatedElem.valid = isValid;
		updatedElem.errMessage = message;
		updatedState[name] = updatedElem;
		formElemsHandler(updatedState);
	};

	let content = Object.entries(formElems).map(([key, data]) => {
		return (
			<div key={key} className="mb-5">
				<label htmlFor={data.configs.id} className="block text-lg mb-2.5">
					{data.label}
				</label>
				<FormInput
					type={data.elemType}
					value={data.value}
					onChangeHandler={changeHandler}
					checkValidity={checkValidity}
					configs={data.configs}
				/>
				{!data.valid && data.errMessage ? (
					<p className="mt-2.5 text-[#ed4337]">{data.errMessage}</p>
				) : null}
			</div>
		);
	});

	return (
		<section className="py-10 pb-20" id="contact">
			<Container>
				<SectionHeader number="04" title="Contact Me">
					<div className="py-10 max-w-[600px] mx-auto">
						<form onSubmit={submitHandler}>
							{content}
							<button
								disabled={!formValidity}
								type="submit"
								className={`py-5 bg-blue text-white font-bold w-full text-[18px] ${
									!formValidity ? "opacity-80" : ""
								}`}
							>
								Send Now
							</button>
						</form>
					</div>
				</SectionHeader>
			</Container>
		</section>
	);
}

export default Contact;
