import React from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import DepositContent from '../../components/Content/Operations/DepositContent';
import { apiOperation } from "../../utils/config";

const Deposit = () => {
  const [accounts, setAccounts] = React.useState('');

  const getAccount = () => {
    apiOperation.get("/account/accounts").then((res) => {
      console.log("Account list checker", res.data);
      if (res.data.success === false) {
        console.log("pls confirm", res.data.message ? res.data.message : "");
      } else {
          setAccounts(res.data.result)
        console.log("Account query checker", res.data.result ? res.data.result : "");
      }
    });
  };

  React.useEffect(() => getAccount(), []);
  return (
    <>
       <DashboardLayout>
      <DepositContent data={accounts} />
      </DashboardLayout>
    </>
  )
}

export default Deposit;