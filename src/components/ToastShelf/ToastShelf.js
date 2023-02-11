import React from "react";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../../Providers/ToastProvider";

function ToastShelf() {
	console.log("ToastShelf is rendered");
	const { toasts } = React.useContext(ToastContext);

	return (
		<ol className={styles.wrapper}>
			{toasts.map((toast) => (
				<li key={toast.id} className={styles.toastWrapper}>
					<Toast className={styles.toast} variant={toast.variant} id={toast.id}>
						{toast.message}
					</Toast>
				</li>
			))}
		</ol>
	);
}

export default React.memo(ToastShelf);
