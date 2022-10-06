import { apiGetImageUrl } from "../api/apiUtils";

export async function getImageUrl(NewImgFile :File) :Promise<any> {
  if (NewImgFile){
    const formData = new FormData()
    formData.append("file", NewImgFile)
    const res = await apiGetImageUrl(formData)
    return res
  }
}