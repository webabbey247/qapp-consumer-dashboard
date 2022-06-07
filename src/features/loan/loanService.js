import { apiLoans} from "../../utils/config";

// Get All Loans
const getAllLoans = async () => {
  const response = await apiLoans.get("/loan/loans");
  console.log("Get All Loans", response.data);
 return response.data
}

const getRepayment = async (formData) => {
    const response = await apiLoans.post("/loan/calculate-monthly-repayment", formData);
    console.log("Get Repayment Service", response.data);
   return response.data
  }


  const getEligibility = async (loanID) => {
    const response = await apiLoans.get(`/loan/eligibility/${loanID}`);
    console.log("Get Eligibility Account ID", response.data);
   return response.data
  }
  

  const applyLoan = async (formData) => {
    const response = await apiLoans.post("/loan/apply", formData);
    console.log("Apply Loan", response.data);
   return response.data
  }  

// const getAccount = async () => {
//     const response = await apiConsumer.get("/account/accounts");
//     console.log("This all accounts", response.data);
//    return response.data
//   }


const loanService = {
    getAllLoans,
    getRepayment,
    getEligibility,
    applyLoan
};

export default loanService;
