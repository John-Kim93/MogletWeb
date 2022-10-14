export interface TimeCreateReqVal {
  type: string,
  everyWeek: boolean,
  everyDay: boolean,
  weeks: string[],
  days: string[],
  time: string,
}

export interface TimeCreateReq {
  weeks: number,
  days: number,
  start_time: string,
  end_time: string,
  type: number
}

export interface TimeUpdateReqVal {
  businessShopTimeUid: string,
  type: string,
  everyWeek: boolean,
  everyDay: boolean,
  weeks: string[],
  days: string[],
  time: string,
}

export interface TimeUpdateReq {
  business_shop_time_uid: number,
  weeks: number,
  days: number,
  start_time: string,
  end_time: string
}