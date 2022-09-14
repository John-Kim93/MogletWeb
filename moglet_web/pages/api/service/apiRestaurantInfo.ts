import axios from 'axios';
import { setToken } from '../apiUtils';

export const apiGetRestaurantInfo = () =>
	axios({
		method: 'get',
		url: '/api/private/businessInfo',
		headers: {
			...setToken()
		}
	})