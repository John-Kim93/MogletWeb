import axios from 'axios';
import { setToken } from '../apiUtils';

export const apiGetMenu = () =>
	axios({
		method: 'get',
		url: '/api/private/businessMenu',
		headers: {
			...setToken()
		}
	})