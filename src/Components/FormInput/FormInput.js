const FormInput = (props) => {
	switch (props.type) {
		case "input":
			return (
				<input
					className="w-full p-2.5 rounded-[5px] border border-gray-200"
					{...props.configs}
					value={props.value}
					onChange={props.onChangeHandler}
					onBlur={props.checkValidity}
				/>
			);

		case "textarea":
			return (
				<textarea
					className="w-full p-2.5 rounded-[5px] border border-gray-200 resize-none"
					{...props.configs}
					value={props.value}
					onChange={props.onChangeHandler}
					onBlur={props.checkValidity}
				/>
			);

		default:
			return (
				<input
					className="w-full"
					{...props.configs}
					value={props.value}
					onChange={props.onChangeHandler}
					onBlur={props.checkValidity}
				/>
			);
	}
};

export default FormInput;
