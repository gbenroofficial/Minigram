import { collection, query, where, getDocs } from "firebase/firestore";
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

//update logged in user following list
export async function updLoggedUserFollowing(
  loggedUserid,
  targetUserId,
  isFollowing
) {
  loggedUserid;
  targetUserId;
  isFollowing;
}

//update followed user's followers list
export async function updFollowedUserFollowers(
  followedUserid,
  loggedUserId,
  isFollower
) {
  followedUserid;
  loggedUserId;
  isFollower;
}

export async function isFollowing(loggedUserId, targetUserId) {
  loggedUserId;
  targetUserId;
}
export async function isFollower(loggedUserId, followedUserId) {
  loggedUserId;
  followedUserId;
}
