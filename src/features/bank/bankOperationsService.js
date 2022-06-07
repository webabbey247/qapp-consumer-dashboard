import { apiAuth, apiConsumer} from "../../utils/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const activeToken = await AsyncStorage.getItem('auth_isLogged_token');
// const parsedToken = JSON.parse(activeToken);
//   console.log([loggedToken, parsedToken]);

//   console.log(loggedToken);

// Get Accounts
const deposit = async (userData) => {
  const response = await apiConsumer.post("/deposit", userData);
  console.log("Deposit Service", response.data);
 return response.data
}

const withdrawal = async (userData) => {
  const response = await apiConsumer.post("/withdrawal", userData);
  console.log("Withdrawal Service", response.data);
 return response.data
}


const intraTransfer = async (userData) => {
  const response = await apiConsumer.post("/transfer/intra", userData);
  console.log("Intra transfer Service", response);
 return response.data
}

const interTransfer = async (userData) => {
  const response = await apiConsumer.post("/transfer/inter", userData);
  console.log("Inter transfer Service", response);
 return response.data
}



const bankOperationsService = {
    deposit,
    withdrawal,
    intraTransfer,
    interTransfer,
};

export default bankOperationsService;
