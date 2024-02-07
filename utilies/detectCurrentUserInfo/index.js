import { Get_Current_User_Connection_Info } from "../../services/endpoints";
async function detectUserInfo() {
  let data = null;
  try {
    const res = await fetch(Get_Current_User_Connection_Info);
    data = await res.json();
  } catch (e) {}
  return data;
}

export default detectUserInfo;
