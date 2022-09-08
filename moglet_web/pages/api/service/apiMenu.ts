import axios from 'axios';

export const apiGetMenu = ( uid :businessShopUid ) =>
	axios({
		method: 'get',
		url: `/api/public/businessMenu?business_shop_uid=${uid}`,
	})