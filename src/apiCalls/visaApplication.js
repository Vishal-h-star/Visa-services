import { userRequest } from "../urls";

export const newApplicationSubmit = async (formData, callback) => {
  try {
    const res = await userRequest.post(`/visaapplication/newApplication`, formData);
    console.log(res, "user");
    if (res.status === 200) {
      return res
    }
  } catch (err) {
    console.log(err, "err for create user");
    alert(err);
  }
};
