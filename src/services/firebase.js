import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export async function GetUserbyid(userid) {
  const q = query(collection(db, "users"), where("userId", "==", userid));
  const users = await getDocs(q);

  const userData = users.docs.map((item) => ({
    ...item.data(),
    DocId: item.id,
  }));

  return userData;
}
