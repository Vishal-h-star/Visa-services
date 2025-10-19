import { publicRequest, userRequest } from "../urls";
import { toast } from "react-toastify";

export const newApplicationSubmit = async (formData, callback) => {
  try {
    const res = await publicRequest.post(`/visaapplication/newApplication`, formData);
    console.log(res, "user");
    if (res.status === 200) {
      return res
    }
  } catch (err) {
    console.log(err, "err for create user");
    alert(err);
  }
};

export const getApplicationDataById = async (applicaitonId) => {
  try {
    const res = await publicRequest.post(`/visaapplication/findApplication?applicationId=${applicaitonId}`);
    console.log(res, "user sdsdf");
    if (res?.status === 200) {
      return res
    }
  } catch (err) {
    console.log(err, "err for create user");
    toast.error(err.response.data.err)
    return err
    // alert(err);
  }
};


export const applicationSubmitStep2 = async (formData, callback) => {
  try {
    const res = await publicRequest.post(`/visaapplication/newApplication`, formData);
    console.log(res, "user");
    if (res.status === 200) {
      return res
    }
  } catch (err) {
    console.log(err, "err for create user");
    alert(err);
  }
};

export const applicationSubmitStep3 = async (formData, callback) => {
  try {
    const res = await publicRequest.post(`/visaapplication/newApplication`, formData);
    console.log(res, "user");
    if (res.status === 200) {
      return res
    }
  } catch (err) {
    console.log(err, "err for create user");
    alert(err);
  }
};

export const applicationSubmitStep4 = async (formData, callback) => {
  try {
    const res = await publicRequest.post(`/visaapplication/newApplication`, formData);
    console.log(res, "user");
    if (res.status === 200) {
      return res
    }
  } catch (err) {
    console.log(err, "err for create user");
    alert(err);
  }
};

export const applicationSubmitStep5 = async (formData, callback) => {
  try {
    const res = await publicRequest.post(`/visaapplication/newApplication`, formData);
    console.log(res, "user");
    if (res.status === 200) {
      return res
    }
  } catch (err) {
    console.log(err, "err for create user");
    alert(err);
  }
};

export const applicationSubmitStep6 = async (formData, callback) => {
  try {
    const res = await publicRequest.post(`/visaapplication/newApplication`, formData);
    console.log(res, "user");
    if (res.status === 200) {
      return res
    }
  } catch (err) {
    console.log(err, "err for create user");
    alert(err);
  }
};


