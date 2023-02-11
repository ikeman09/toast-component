import React from "react";
import styles from "../ToastPlayground/ToastPlayground.module.css";
import RadioButton from "../RadioButton";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function RadioSection({ variant, setVariant }) {
	return (
		<div className={styles.row}>
			<div className={styles.label}>Variant</div>
			<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
				{VARIANT_OPTIONS.map((option) => (
					<RadioButton
						key={crypto.randomUUID()}
						variant={option}
						setVariant={setVariant}
						name="variant"
						checked={option === variant}
					>
						{option}
					</RadioButton>
				))}
			</div>
		</div>
	);
}

export default React.memo(RadioSection);
