// export const setToken = () => {
// 	const token = localStorage.getItem('access') || ' ';
// 	const config = {
// 		Authorization: `Bearer ${token}`,
// 	};
// 	return config;
// };
export const setToken = () => {
	const token = sessionStorage.access_token
	const config = {
		access_token: `${token}`,
	};
	return config;
};