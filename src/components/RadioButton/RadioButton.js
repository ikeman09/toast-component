import React from "react";

function RadioButton({ variant, children, group }) {
	const suppliedId = `${React.useId()}-variant-${variant}`;

	return (
		<div>
			<label htmlFor={suppliedId}>
				<input id={suppliedId} type="radio" name={group} value={children} />
				{children}
			</label>
		</div>
	);
}

export default RadioButton;
