import {
  getDoc,
  doc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../lib/firebase";

export async function fetchUserProfileByDocId(userid) {
  const q = query(collection(db, "users"), where("userId", "==", userid));
  const users = await getDocs(q);

  const userData = users.docs.map((item) => ({
    ...item.data(),
    DocId: item.id,
  }));

  return userData;
}

//add target user to user following list
export async function addToFollowing(Userid, targetUserId) {
  const docRef = doc(db, "users", Userid);
  await updateDoc(docRef, { following: arrayUnion(targetUserId) });
}

//remove target user from user following list
export async function removeFromFollowing(Userid, targetUserId) {
  const docRef = doc(db, "users", Userid);
  await updateDoc(docRef, { following: arrayRemove(targetUserId) });
}

//update followed user's followers list
export async function removeFromFollowers(Userid, targetUserId) {
  const docRef = doc(db, "users", Userid);
  await updateDoc(docRef, { followers: arrayRemove(targetUserId) });
}

export async function addToFollowers(Userid, targetUserId) {
  const docRef = doc(db, "users", Userid); //reference to the document
  await updateDoc(docRef, { followers: arrayUnion(targetUserId) }); //arrayunion adds to the array. updateDoc creates new array if not exist
}

export async function isFollowing(userId, targetUserId) {
  const userList = [];
  const docRef = doc(db, "users", userId);
  const userShot = await getDoc(docRef); //need to add if usershot exist error handling
  const user = userShot.data();
  user.following.map((user) => userList.push(user));
  return user.following.includes(targetUserId);
}
export async function isFollowedBy(userId, targetUserId) {
  const userList = [];
  const docRef = doc(db, "users", userId);
  const userShot = await getDoc(docRef); //getDoc returns queryshot type
  const user = userShot.data(); //.data() converts queryshot type to document data
  user.followers.map((user) => userList.push(user));
  return userList.includes(targetUserId); //user.followers.includes also works. will come back to edit
}
