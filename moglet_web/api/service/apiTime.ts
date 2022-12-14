import axios from 'axios';
import { TimeCreateReq, TimeUpdateReq } from '../../req/service/timeReq';
import { setToken } from '../apiUtils';

export const apiPostTime = (req :TimeCreateReq) =>
	axios({
		method: 'post',
		url: '/api/private/businessTime',
		headers: {
			...setToken()
		},
		data: {
			...req
		}
	})

export const apiDeleteTime = (uid :number) =>
	axios({
		method: 'delete',
		url: `/api/private/businessTime?business_shop_time_uid=${uid}`,
		headers: {
			...setToken()
		}
	})

export const apiPutTime = (req :TimeUpdateReq) =>
	axios({
		method: 'put',
		url: '/api/private/businessTime',
		headers: {
			...setToken()
		},
		data: {
			...req
		}
	})