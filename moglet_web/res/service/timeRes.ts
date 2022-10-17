export interface TimeElement {
  uid :number,
  element :string,
}
export interface HolidayElement extends TimeElement {
  days :string,
  weeks :string,
}

export interface TimeTable {
  BUSINESS_TIME :TimeElement[],
  BREAK_TIME :TimeElement[],
  LAST_ORDER :TimeElement[],
  HOLIDAY :TimeElement[],
}