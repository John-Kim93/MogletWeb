import { atom } from "recoil";

export const reviewDetail = atom({
  key: 'reviewDetail',
  default: {
    uid: null,
    filename: null,
    videoType: null,
    isMain: null,
    countView: null,
    content: null,
    visitSatisfaction: null,
    nickname: null,
    profileFilename: null,
    createdTime: null,
  }
});