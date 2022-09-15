import axios from 'axios';
import { MenuCreateReq } from '../../req/service/menuReq';
import { setToken } from '../apiUtils';

export const apiGetMenu = () =>
	axios({
		method: 'get',
		url: '/api/private/businessMenu',
		headers: {
			...setToken()
		}
	})

	export const apiPostMenu = (req :MenuCreateReq) =>
		axios({
			method: 'post',
			url: '/api/private/businessMenu',
			headers: {
				...setToken()
			},
			data: {
				...req
			}
		})