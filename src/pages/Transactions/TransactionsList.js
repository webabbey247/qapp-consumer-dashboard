import React, {useState} from 'react';
import styled from "styled-components";
import { useParams } from "react-router-dom";
import DashboardLayout from '../../components/Layout/DashboardLayout';
import AccountHistory from '../../components/TransactionHistory/AccountHistory';
import { apiOperation } from '../../utils/config';


export const TransactionContainer = styled.div`
display: flex;
flex-direction: column;
margin: 1rem 0;
justify-content: center;
align-content: center;
align-items: center;
width: 100%;
`;


const TransactionsList = () => {
    const params = useParams();
    const pageNumber = params.pageNumber ? parseInt(params.pageNumber, 10) : 0;
    const accountID = params.accountID;
    const [result, setResult] = useState([]);
   

    const accountHistory = () => {
        // console.log("account id", accountID);
        // console.log("account number", pageNumber);
        apiOperation.get(`/account/transactions/${accountID}/${pageNumber}`).then((res) => {
          if(res.data.success === false) {
            console.log("The account summary", res.data.message);
          } else {   
            setResult(res.data.result);
            console.log("The account summary", res.data.result);
          }
      });
      }
      



React.useEffect(() => accountHistory(),[]);
  return (
    <>
       <DashboardLayout>
       <AccountHistory data={result} />
      </DashboardLayout>
    </>
  )
}

export default TransactionsList;