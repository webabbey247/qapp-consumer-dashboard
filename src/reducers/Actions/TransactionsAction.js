import { getTodaytransactions } from "../../api/transactionApi";
import { recentSpendingPending, recentSpendingSuccess, recentSpendingFail } from "../Slice/TransactionsSlice";

  export const fetchRecentTransaction = () => async (dispatch) => {

    dispatch(recentSpendingPending());

    try {
      const res = await getTodaytransactions();

      console.log("checking bank result", res)
      res.data.result.length &&
        dispatch(recentSpendingSuccess(res.data.result));
    } catch (error) {
      dispatch(recentSpendingFail(error.message));
    }
  };