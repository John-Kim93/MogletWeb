import { useQuery } from 'react-query';
import { apiGetRestaurantInfo } from '../../api/service/apiRestaurantInfo';
import { BusinessShopTime } from '../../res/service/time';
import { TimeTable, StringDaysAndWeeks, TimeElement } from '../../../types/time';

export function getTimeInfo () :string | TimeTable {
  const getTime = () => {
    const res = useQuery(['get_restaurantInfo_uid'], () => apiGetRestaurantInfo())

    if(res.isLoading) {
      return "로딩중"
    }

    if(res.isSuccess) {
      const result :TimeTable = {
        "BUSINESS_TIME" : new Array,
        "BREAK_TIME" : new Array,
        "LAST_ORDER" : new Array,
        "HOLIDAY" : new Array,

      }
      const shopTimeList: BusinessShopTime[] = res.data.data.item.business_shop_time_list
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
  return getTime()
}

function calculateBinaryCodeToString(days :number, weeks :number) :StringDaysAndWeeks{
  let wordDays = ""
  const koreanDays = ['월', '화', '수', '목', '금', '토', '일']
  if (days == 0) {
    wordDays = "매일"
  } else {
    for (let i = 0; i < 7; i++) {
      const binaryCheck = 2**i
      if (days & binaryCheck) {
        wordDays += `${koreanDays[i]}, `
      }
    }
    wordDays = wordDays.substring(0, wordDays.length - 2)
  }
  let wordWeeks = ""
  const koreanWeeks = ['첫째 주', '둘째 주', '셋째 주', '넷째 주', '다섯째 주']
  if (weeks) {
    for (let i = 0; i < 5; i++) {
      const binaryCheck = 2**i
      if (weeks & binaryCheck) {
        wordWeeks += `${koreanWeeks[i]}, `
      }
    }
    wordWeeks = wordWeeks.substring(0, wordWeeks.length - 2)
  }
  return {
    wordDays,
    wordWeeks
  }
}