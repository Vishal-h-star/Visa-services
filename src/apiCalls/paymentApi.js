import { publicRequest, userRequest } from "../urls";
import { toast } from "react-toastify";


export const PaypalPayment = async (applicationId) => {
    try {
        console.log('sfdhf')
        const res = await publicRequest.post(`/payments/create-paypal-order?applicationId=${applicationId}`);
        console.log(res, 'res')
        if(res.status == 200){
            console.log(res, 'res in stats')
            return res
        }
    }
    catch (err) {
        console.log(err, 'err')
        toast.error(err?.response?.data?.message)
        return err;
    }
}

export const PaypalPaymentApproval = async (orderID, applicationId) => {
    try {
        console.log(applicationId,'applicationId')
        console.log(orderID,'orderID')

        const res = await publicRequest.post(`/payments/capture-paypal-order?applicationId=${applicationId}&orderID=${orderID}`);
        console.log(res, 'res')
        if(res.status == 200){
            console.log(res, 'res in stats')
            return res
        }
    }
    catch (err) {
        console.log(err, 'err')
        toast.error(err?.response?.data?.message)
        return err;
    }
}