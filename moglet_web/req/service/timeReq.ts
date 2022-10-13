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