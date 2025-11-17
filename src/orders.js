import API from "./api";

export const getAllOrders = async () => {
  const res = await API.get("/orders");
  return res.data;
};
