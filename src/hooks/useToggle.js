import React from "react";

// React toggle custom hook
const useToggle = () => {
	// Make sure to use the React.useCallback hook to memoize the toggle function
	// so that it doesn't change on every render
	const [on, setOn] = React.useState(false);
	const toggle = React.useCallback(() => setOn((on) => !on), []);
	return [on, toggle];
};

export default useToggle;
