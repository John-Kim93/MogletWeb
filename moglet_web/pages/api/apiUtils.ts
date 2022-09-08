export const setToken = () => {
	const token = localStorage.getItem('access') || '';
	const config = {
		Authorization: `Bearer ${token}`,
	};
	return config;
};