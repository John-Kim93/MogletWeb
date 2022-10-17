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
  if (weeks == 0) {
    wordWeeks = "매주"
  } else {
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

export function sumBinaryCode(stringCodeList :string[]) :number{
  let result = 0
  console.log("HERE5", stringCodeList)
  if (stringCodeList[0]) {
    stringCodeList.forEach((stringCode) => {
      console.log("here444")
      result += parseInt(stringCode)
    })
  }
  console.log("here2", result)
  return result
}

export function convertStringArrayToBinaryCodeArray(data :string[], type :string) :string[] {
  switch (type) {
    case "days" :
      if (!data[0]) {
        return []
      }
      const dayToNum = {
        "매일" : '0',
        "월" : '1',
        "화" : '2',
        "수" : '4',
        "목" : '8',
        "금" : '16',
        "토" : '32',
        "일" : '64',
      }
      return data.map((day) => dayToNum[day])
    case "weeks" :
      if (!data[0]){
        return []
      }
      const weekToNum = {
        "매주" : '0',
        "첫째 주" : '1',
        "둘째 주" : '2',
        "셋째 주" : '4',
        "넷째 주" : '8',
        "다섯째 주" : '16',
      }
      return data.map((week) => weekToNum[week])
  }
}