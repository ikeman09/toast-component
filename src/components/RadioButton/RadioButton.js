import React from "react";

function RadioButton({
	variant = "notice",
	children,
	setVariant,
	...delegated
}) {
	const suppliedId = `${React.useId()}-variant-${variant}`;

	console.log("RadioButton is rendering");

	return (
		<label htmlFor={suppliedId}>
			<input
				id={suppliedId}
				type="radio"
				value={variant}
				onChange={(event) => {
					setVariant(event.target.value);
				}}
				{...delegated}
			/>
			{children}
		</label>
	);
}

export default React.memo(RadioButton);
