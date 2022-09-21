export interface LoginRes {
  uid :number,
  id :string,
  deleted_time: string | null,
  created_time: string,
  updated_time: string,
  business_license_number: string,
  pw: string,
  name :string,
  corp_name :string,
  address :string,
  access_token :string
}