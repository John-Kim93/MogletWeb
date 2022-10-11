import { RestaurantRes } from '../../res/service/restaurantInfoRes';
import { TimeTable, StringDaysAndWeeks, TimeElement } from '../../res/service/timeRes';
import { calculateBinaryCodeToString } from '../utilRepo';

export function convertTimeRes(values :RestaurantRes) :TimeTable {
  if (values) {
    const result :TimeTable = {
      "BUSINESS_TIME" : new Array,
      "BREAK_TIME" : new Array,
      "LAST_ORDER" : new Array,
      "HOLIDAY" : new Array,
    }
    const shopTimeList = values.business_shop_time_list
    shopTimeList.map(shopTimeInfo => {
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
          const holiday = `매주 ${shopTimeObject.wordWeeks} 휴무`
          const holidayResult :TimeElement = {
            uid :shopTimeInfo.uid,
            element :holiday
          }
          result.HOLIDAY.push(holidayResult)
          break;
      }
    })
    return result
  }
}

