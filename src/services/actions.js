import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export async function GetUserbyid(userid) {
  const q = await query(collection(db, "users"), where("userId", "==", userid));
  const users = getDocs(q);
  (await users).forEach((doc) => {
    console.log(doc.data());
  });

  return users;
}
