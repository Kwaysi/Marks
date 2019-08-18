import { SETUSERDETAILS } from "./types";

export const setUserDetails = (data) => {
  return {
    type: SETUSERDETAILS,
    payload: data
  }
}