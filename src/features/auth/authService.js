import { authAxios, accountAxios, loanAxios } from "../../utils/config";

// Login user
const login = async (formData) => {
  const response = await authAxios.post("/login", formData);
  console.log("lets login", response.data);
  return response.data;
};


const authService = {
  login,
};

export default authService;
