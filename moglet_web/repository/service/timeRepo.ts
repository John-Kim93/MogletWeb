import { TimeCreateReq, TimeCreateReqVal, TimeUpdateReq, TimeUpdateReqVal } from '../../req/service/timeReq';
import { RestaurantRes } from '../../res/service/restaurantInfoRes';
import { TimeTable, TimeElement, HolidayElement } from '../../res/service/timeRes';
import { calculateBinaryCodeToString, sumBinaryCode, StringDaysAndWeeks } from '../utilRepo';

export function convertTimeRes(values :RestaurantRes) :TimeTable {
  if (values) {
    const result :TimeTable = {
      "BUSINESS_TIME" : new Array,
      "BREAK_TIME" : new Array,
      "LAST_ORDER" : new Array,
      "HOLIDAY" : new Array,
    }
    const shopTimeList = values.business_shop_time_list
    shopTimeList?.map(shopTimeInfo => {
      const shopTimeObject :StringDaysAndWeeks = calculateBinaryCodeToString(shopTimeInfo.days, shopTimeInfo.weeks)
      const shopTime :string = `${shopTimeInfo.start_time} ~ ${shopTimeInfo.end_time} (${shopTimeObject.wordDays})`
      const shopTimeResult :TimeElement = {
        uid :shopTimeInfo.uid,
        element :shopTime
      }
      switch(shopTimeInfo.type) {
        case 1:
          result.BUSINESS_TIME.push(shopTimeResult)
          break;
        case 2:
          result.BREAK_TIME.push(shopTimeResult)
          break;
        case 3:
          const lastOrder = `${shopTimeInfo.start_time} (${shopTimeObject.wordDays})`
          const lastOrderResult :TimeElement = {
            uid :shopTimeInfo.uid,
            element :lastOrder
          }
          result.LAST_ORDER.push(lastOrderResult)
          break;
        case 4:
          const holiday = `${shopTimeObject.wordWeeks} ${shopTimeObject.wordDays} 휴무`
          const days = shopTimeObject.wordDays
          const weeks = shopTimeObject.wordWeeks
          const holidayResult :HolidayElement = {
            uid :shopTimeInfo.uid,
            element :holiday,
            days,
            weeks,
          }
          result.HOLIDAY.push(holidayResult)
          break;
      }
    })
    return result
  }
}

export function convertTimeCreate(values :TimeCreateReqVal) :TimeCreateReq  {
  let days = 0
  if (!values.everyDay) {
    days = sumBinaryCode(values.days)
  }
  
  let weeks = 0
  if (!values.everyWeek) {
    weeks = sumBinaryCode(values.weeks)
  }
  const startTime = values.time.slice(0, 2) + ":" + values.time.slice(2, 4)
  const endTime = values.time.slice(4, 6) + ":" + values.time.slice(6, 8)

  const type = typeConverter(values.type)

  const req = {
    weeks,
    days,
    start_time: startTime,
    end_time: endTime,
    type,
  }
  return req
}

export function convertTimeUpdate(values :TimeUpdateReqVal) :TimeUpdateReq  {
  let days = 0
  if (!values.everyDay) {
    days = sumBinaryCode(values.days)
  }
  
  let weeks = 0
  if (!values.everyWeek) {
    weeks = sumBinaryCode(values.weeks)
  }
  const startTime = values.time.slice(0, 2) + ":" + values.time.slice(2, 4)
  const endTime = values.time.slice(4, 6) + ":" + values.time.slice(6, 8)

  const req = {
    business_shop_time_uid: parseInt(values.businessShopTimeUid),
    weeks,
    days,
    start_time: startTime,
    end_time: endTime,
  }
  return req
}

function typeConverter(type :string) :number{
  switch (type) {
    case "영업 시간":
      return 1
    case "브레이크 타임":
      return 2
    case "라스트 오더":
      return 3
    case "정기 휴무":
      return 4
  }
}