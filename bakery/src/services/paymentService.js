import api from "../utils/axiosConfig";

export const paymentWithMomo = async (amount,method,useId) => {
  try {
    const response = await api.post("/payment/Momo", {
      amounts: amount,
      method: method,
      userid:useId
    });

    return response.data;
  } catch (error) {
    console.error("Lỗi khi thanh toán qua Momo:", error);
    throw error;
  }
};
export const paymentWithVnPay= async (order) => {
  try {
    const response = await api.post("/payment/VNPay", order);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi thanh toán qua VNPay:", error);
    throw error;
  }
};