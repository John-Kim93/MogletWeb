import axios from 'axios';
import { setToken } from '../apiUtils';
import { MenuCreateReq } from '../../req/service/menuReq';

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