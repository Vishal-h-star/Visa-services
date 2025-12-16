import { publicRequest, userRequest } from "../urls";
import { toast } from "react-toastify";

export const getCountryList = async () => {
  try {
    const res = await publicRequest.get(`/visaCharges/getAllCountry`);
    console.log(res, "country list");
    if (res.status === 200) {
      return res.data.data
    }
  } catch (err) {
    console.log(err, "err for create user");
    alert(err);
  }
};
