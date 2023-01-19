/* eslint-disable prettier/prettier */
import { collection, addDoc } from "firebase/firestore";
// NOTE: replace 'NgInICP2bIhu0L7KsVqFGD4DMbz1' with your Firebase auth user id (can be taken from Firebase)
export function seedData(db) {
  const users = [
    {
      //this user is mine i.e. admin/owner
      userId: "NgInICP2bIhu0L7KsVqFGD4DMbz1",
      username: "karl",
      fullName: "Karl Hadwen",
      emailAddress: "smesh005@gmail.com",
      following: [],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "raphael",
      fullName: "Raffaello Sanzio da Urbino",
      emailAddress: "raphael@sanzio.com",
      following: ["NgInICP2bIhu0L7KsVqFGD4DMbz1"],
      followers: [""],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "dali",
      fullName: "Salvador Dalí",
      emailAddress: "salvador@dali.com",
      following: ["NgInICP2bIhu0L7KsVqFGD4DMbz1"],
      followers: [],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "orwell",
      fullName: "George Orwell",
      emailAddress: "george@orwell.com",
      following: ["NgInICP2bIhu0L7KsVqFGD4DMbz1"],
      followers: [],
      dateCreated: Date.now(),
    },
  ];

  // adding all the users to the firestore database user collection
  for (let k = 0; k < users.length; k++) {
    addDoc(collection(db, "users"), users[k])
    }
    
  

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    addDoc(collection(db, "photos"), ({
      photoId: i,
      userId: "2",
      imageSrc: "C:/Users/smesh/Pictures",
      caption: "Saint George and the Dragon",
      likes: [],
      comments: [
        {
          displayName: "dali",
          comment: "Love this place, looks like my animal farm!",
        },
        {
          displayName: "orwell",
          comment: "Would you mind if I used this picture?",
        },
      ],
      userLatitude: "40.7128°",
      userLongitude: "74.0060°",
      dateCreated: Date.now(),
    }));
    // db.collection("photos").add();
  }
}
