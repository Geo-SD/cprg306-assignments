import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
    const items = [];


    // Reference to the subcollection 'items' under the user's document
    const userItemsRef = collection(db, `users/${userId}/items`);
    
    // Fetching the subcollection 'items'
    const querySnapshot = await getDocs(userItemsRef);

    // Looping through each document within the 'items' subcollection
    querySnapshot.forEach(doc => {
        
    // Appending an object to the 'items' array with document ID and data
        items.push({
            id: doc.id,
            data: doc.data()
        });
    });

    return items;
}

    // Function for adding a new item to a specific user's list within Firestore
async function addItem(userId, item) {
   
    // Reference to the 'items' subcollection under the user's document
    const userItemsRef = collection(db, `users/${userId}/items`);

    // Adding the item to the items subcollection
    const newItemRef = await addDoc(userItemsRef, item);

    // Returning the ID of the newly created document
    return newItemRef.id;
}

// Exporting the functions
export { getItems, addItem };