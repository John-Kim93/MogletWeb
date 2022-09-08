import axios from 'axios';

export const apiGetRestaurantInfo = ( uid :businessShopUid ) =>
	axios({
		method: 'get',
		url: `/api/public/businessInfo?business_shop_uid=${uid}`,
	})