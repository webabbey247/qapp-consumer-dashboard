import React,  {useEffect} from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";
import Content from "../components/Content/Content";
import { apiOperation } from "../utils/config";
const Homepage = () => {

  const getAccount = () => {
    apiOperation.get("/account/accounts").then((res) => {
        console.log("Account list checker", res.data);
        if(res.data.success === false) {
          console.log(res.data.message ? res.data.message : "");
        } else {   
          localStorage.setItem("accounts", JSON.stringify(res.data.result));
          console.log("Account query checker", res.data.result ? res.data.result : "");
        }
    });
};

useEffect(() => getAccount());

  return (
    <>
      <DashboardLayout>
        <Content />
      </DashboardLayout>
    </>
  );
};

export default Homepage;
