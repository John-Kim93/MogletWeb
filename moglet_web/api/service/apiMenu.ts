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

export const apiDeleteMenu = (uid :number) =>
axios({
	method: 'delete',
	url: `/api/private/businessMenu?business_shop_menu_uid=${uid}`,
	headers: {
		...setToken()
	}
})

export const apiPutMenu = (req :MenuCreateReq) =>
	axios({
		method: 'put',
		url: '/api/private/businessMenu',
		headers: {
			...setToken()
		},
		data: {
			...req
		}
	})