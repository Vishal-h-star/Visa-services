import { publicRequest, userRequest } from "../urls";


export const PaypalPayment = async (applicationId) => {
    try {
        console.log('sfdhf')
        const res = await publicRequest.post(`/payments/create-paypal-order?applicationId=${applicationId}`);
        console.log(res, 'res')
        return res;
    }
    catch (err) {
        console.log(err, 'err')
    }
}

export const PaypalPaymentApproval = async () => {
    try {
        console.log('sfdhf')
    }
    catch (err) {
        console.log(err, 'err')
    }
}