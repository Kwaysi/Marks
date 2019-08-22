import { SETUSERDETAILS, SETPERfORMANCE, DISABLEFLASH } from "./types";
import Axios from "axios";

export const setUserDetails = (data) => {
  localStorage.setItem("user", JSON.stringify(data));

  Axios.post('', data)
    .then((res)=>{
      console.log(res);
    })
    .catch(
      error => {
        console.log(error);
      }
    );
  return {
    type: SETUSERDETAILS,
    payload: data
  }
}

export const setScores = (data) => {
  localStorage.setItem("performance", JSON.stringify(data));
  return {
    type: SETPERfORMANCE,
    payload: data
  }
}

export const disableFlashes = (foo) => {
  localStorage.setItem("flash", JSON.stringify(foo));
  return {
    type: DISABLEFLASH,
    payload: foo
  }
}
