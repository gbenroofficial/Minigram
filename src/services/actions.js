import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export async function GetUserbyid(userid) {
  const q = await query(collection(db, "users"), where("userid", "==", userid));
  const user = getDocs(q);
  return user;
}
