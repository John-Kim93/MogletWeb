import axios from 'axios';
import { setToken } from '../apiUtils';

export const apiGetReview = ({ offset }) => 
  axios({
		method: 'get',
		url: `/api/private/businessComment/review/list?video_type=0&second_type=0&is_filter=1&offset=${offset * 12}`,
		headers: {
			...setToken()
		}
  })