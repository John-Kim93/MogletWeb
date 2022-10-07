export interface StringDaysAndWeeks {
  wordDays :string,
  wordWeeks :string
}

export interface TimeElement {
  uid :number,
  element :string,
}

export interface TimeTable {
  BUSINESS_TIME :TimeElement[],
  BREAK_TIME :TimeElement[],
  LAST_ORDER :TimeElement[],
  HOLIDAY :TimeElement[],
}