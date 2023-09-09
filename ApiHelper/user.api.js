import Api from "@/config/api";
import { notifyError ,notifySuccess } from "@/components/toastify/toastify";


export function updateUserData(data,reset){
  console.log(data)
    Api.patch("/user/data",data)
    then(()=>{
        reset()
      notifySuccess("Account updated !!")
    })
    .catch((error)=>{
      let errorMsg = error?.response?.data?.message || error?.response?.data?.error
      notifyError(errorMsg)
    })
}