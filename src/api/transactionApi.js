import { apiOperation} from "../utils/config";

const recentSpendingUrl = "/account/today-spend";
const allTransactionUrl = "/login";

export const getTodaytransactions = (formData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await apiOperation.get(recentSpendingUrl, formData);
        resolve(res.data);
        if (res.data.success === true) {
          resolve(res.data);
          console.log("api route proxy")
        }
      } catch (error) {
        reject(error);
      }
    });
  };

