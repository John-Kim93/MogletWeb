import axios from 'axios';
import { BASE_URL, setToken } from './utils';

export const apiLogin = ( id :string, pw: string ) =>
	axios({
		method: 'get',
		url: `/api/public/user/signup/check?id=${id}&pw=${pw}`,
	})