import axios from 'axios';
import { RestaurantUpdateReq } from '../../req/service/restaurantInfoReq';
import { setToken } from '../apiUtils';

export const apiGetRestaurantInfo = () =>
	axios({
		method: 'get',
		url: '/api/private/businessInfo',
		headers: {
			...setToken()
		}
	})

export const apigetSubCategories = (req :number) =>
	axios({
		method: 'get',
		url: `/api/private/businessInfo/sub/category?food_main_category=${req}`,
		headers: {...setToken()},
	})

export const apiPutRestaurantInfo = (req :RestaurantUpdateReq) => 
axios({
	method: 'put',
	url: '/api/private/businessInfo',
	headers: {
		...setToken()
	},
	data: req
})