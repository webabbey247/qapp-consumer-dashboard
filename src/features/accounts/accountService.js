import { apiAuth, apiConsumer} from "../../utils/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const activeToken = await AsyncStorage.getItem('auth_isLogged_token');
// const parsedToken = JSON.parse(activeToken);
//   console.log([loggedToken, parsedToken]);

//   console.log(loggedToken);

// Get Accounts
const getAccount = async () => {
  const response = await apiConsumer.get("/account/accounts");
  console.log("This all accounts", response.data);
 return response.data
}

// Get Todays Spent
const getTodaySpent =  async () => {
    const response = await apiConsumer.get("/account/today-spend");
    const resultData = response.data;
    console.log("Today spent", response.data);
    return resultData;
}

// Get Account History
const getAccountHistory =  async () => {
    const response = await apiConsumer.get("/consumers/get-transactions-account/bank-ID/0");
    const resultData = response.data;
    console.log(response.data);
    return resultData;
}


const accountService = {
    getAccount,
    getTodaySpent,
    getAccountHistory
};

export default accountService;
