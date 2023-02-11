import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ handleCloseToast, toasts }) {
	console.log("ToastShelf is rendered");
	return (
		<ol className={styles.wrapper}>
			{toasts.map((toast) => (
				<li key={toast.id} className={styles.toastWrapper}>
					<Toast
						className={styles.toast}
						handleCloseToast={handleCloseToast}
						variant={toast.variant}
						id={toast.id}
					>
						{toast.message}
					</Toast>
				</li>
			))}
		</ol>
	);
}

export default React.memo(ToastShelf);
