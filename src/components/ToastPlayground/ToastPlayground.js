import React from "react";
import Button from "../Button";
import RadioSection from "../RadioSection";
import useToggle from "../../hooks/useToggle";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../../Providers/ToastProvider";

function ToastPlayground() {
	const [message, setMessage] = React.useState("");
	const [showToast, toggleToast] = useToggle();
	const [variant, setVariant] = React.useState("notice");
	const { addToast } = React.useContext(ToastContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		addToast({ id: crypto.randomUUID, message, variant });
		setMessage("");
		if (!showToast) toggleToast();
	};

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>
			<ToastShelf />
			<form onSubmit={handleSubmit} className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{ alignSelf: "baseline" }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id="message"
							className={styles.messageInput}
							value={message}
							onChange={(event) => {
								setMessage(event.target.value);
							}}
						/>
					</div>
				</div>

				<RadioSection variant={variant} setVariant={setVariant} />

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default React.memo(ToastPlayground);
