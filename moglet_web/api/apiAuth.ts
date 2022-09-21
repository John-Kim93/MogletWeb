import axios from 'axios';
import { LoginReq } from '../req/authReq';

export const apiLogin = ( info :LoginReq ) =>
	axios({
		method: 'get',
		url: `/api/public/user/signup/check?id=${info.id}&pw=${info.pw}`,
	})