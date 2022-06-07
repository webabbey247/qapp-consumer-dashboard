import axios from "axios";
const token = localStorage.getItem("b_token");

const apiAuth = axios.create({
  baseURL: "http://qapp-customer-auth.eu-west-1.elasticbeanstalk.com/api/v1/auth",
  headers: {
    "Locale": { "id": "en", "country": "US", "name": "English - LTR", "direction": "ltr" },
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Bank-ID": "f4934971-0352-4bc2-8596-e6ea877cbdaa",
    "Platform": "WEB",
    "Authorization": token ? `Bearer ${token}` : ""
  },
});


export { apiAuth};
