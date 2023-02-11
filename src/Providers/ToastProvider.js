import React from "react";

export const ToastContext = React.createContext();

const ToastProvider = ({ children }) => {
	const [toasts, setToasts] = React.useState([]);

	const addToast = React.useCallback((toast) => {
		setToasts((toasts) => [...toasts, toast]);
	}, []);

	const removeToast = React.useCallback((id) => {
		setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
	}, []);

	return (
		<ToastContext.Provider value={{ addToast, removeToast, toasts }}>
			{children}
		</ToastContext.Provider>
	);
};

export default ToastProvider;
