import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from "./Firebase";

export const fetchData = async (collectionName:string,userId:string) => {
  try {
    const docRef = doc(db,collectionName, userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // If the document exists, access and log the 'Balance' field
      const data = docSnap.data();
      return data;
    } else {
      return null;
    }
  } catch (e) {
    console.error("Error fetching document: ", e);
  }
};

// export const getUserInfo = async () => {
//   try {
//     const response = await fetch(
//       `https://api.telegram.org/bot7383874226:AAExCyTqYer8Nfx3TRxTsA8WhdWTmtwThh0/getUpdates`
//     );
//     const data = await response.json();

//     console.log("data", data);
//     // Check if there are any updates
    
//   } catch (error) {
//     console.error("Error fetching updates:", error);
//   }
// };

export const updateUserDoc=async(CollectionName:string,telegramUserId:string,balance:number)=>{
  try {
    const docRef = doc(db, CollectionName, telegramUserId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setTimeout(async () => {
        await updateDoc(docRef, {
          balance:balance,
          
        });
      }, 5000); // 5000 milliseconds = 5 seconds
    }
  } catch (err) {
    console.log("Error", err);
  }
}