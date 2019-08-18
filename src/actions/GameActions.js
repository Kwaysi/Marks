import { SETUSERDETAILS, SETPERfORMANCE } from "./types";

export const setUserDetails = (data) => {
  return {
    type: SETUSERDETAILS,
    payload: data
  }
}

export const setScores = (data) => {
  return {
    type: SETPERfORMANCE,
    payload: data
  }
}