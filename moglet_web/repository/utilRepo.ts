import { apiGetImageUrl } from "../api/apiUtils";

export async function getImageUrl(NewImgFile :File) :Promise<any> {
  if (NewImgFile){
    const formData = new FormData()
    formData.append("file", NewImgFile)
    const res = await apiGetImageUrl(formData)
    return res
  }
}

export interface StringDaysAndWeeks {
  wordDays :string,
  wordWeeks :string
}

export interface NumberDaysAndWeeks {
  days :number,
  weeks :number
}

export function calculateBinaryCodeToString(days :number, weeks :number) :StringDaysAndWeeks{
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

export function calculateStringToBinaryCode(daysList :string[], weeksList :string[]) :NumberDaysAndWeeks{
  let days = 0
  if (daysList[0]) {
    daysList.forEach((day) => {
      days += parseInt(day)
    })
  }
  let weeks = 0
  if (weeksList[0]) {
    weeksList.forEach((week) => {
      weeks += parseInt(week)
    })
  }
  return {
    days,
    weeks,
  }
}