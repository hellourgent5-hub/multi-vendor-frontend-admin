import API from "./api";

export const loginAdmin = async (email, password) => {
  const res = await API.post("/auth/admin-login", { email, password });
  localStorage.setItem("token", res.data.token);
  return res.data;
};
