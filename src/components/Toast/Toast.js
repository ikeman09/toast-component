import React from "react";
import {
	AlertOctagon,
	AlertTriangle,
	CheckCircle,
	Info,
	X,
} from "react-feather";
import { ToastContext } from "../../Providers/ToastProvider";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function Toast({ id, children, variant = "notice", handleCloseToast }) {
	const Icon = ICONS_BY_VARIANT[variant];
	const { removeToast } = React.useContext(ToastContext);

	console.log("Toast is rendered");
	return (
		<div className={`${styles.toast} ${styles[variant]}`}>
			<div className={styles.iconContainer}>
				<Icon size={24} />
			</div>
			<p className={styles.content}>{children}</p>
			<button
				className={styles.closeButton}
				onClick={(event) => {
					event.preventDefault();
					removeToast(id);
				}}
			>
				<X size={24} />
				<VisuallyHidden>Dismiss message</VisuallyHidden>
			</button>
		</div>
	);
}

export default React.memo(Toast);
