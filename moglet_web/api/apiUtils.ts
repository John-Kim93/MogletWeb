import axios from "axios";

export const setToken = () => {
	const token = sessionStorage.access_token
	const config = {
		access_token: `${token}`,
	};
	return config;
};


export const apiGetImageUrl = (formData) =>
	axios({
		method: 'post',
		url: '/api/public/file',
		headers: {
			"Content-Type": "multipart/form-data",
			...setToken()
		},
		data: formData
	})
