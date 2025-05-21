import {
  auth,
  db,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  setDoc,
  deleteDoc,
  doc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  onSnapshot,
  setPersistence,
  browserLocalPersistence
} from "../../firebase.js";

import { getCurrentuserdata } from "./auth.js";

/* Update Users Profile*/
export const updateuserProfile = async (updatedDOC) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No authenticated user");

    const docref = doc(db, 'users', user.uid);
    await updateDoc(docref, updatedDOC);
    console.log("Here");
    return { success: true, user_val: user };

  } catch (error) {
    console.error("Error updating user:", error.message);
    return { success: false, error: error.message };
  }

};

/* Fetching product details*/
export const getproductDetail = async () => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No authenticated user");

    const listings_ref = collection(db, "products");
    const listing_query = query(listings_ref, where("soldBy", "==", user.uid));
    const listings_snapshot = await getDocs(listing_query);
    const products = [];

    if (listings_snapshot.empty) {
      console.log("No products found for this user.");
      return { success: true, products: null };
    } else {
      listings_snapshot.forEach(Docs => {
        products.push({
          id: doc.id,
          ...Docs.data()
        });
      });
    }

    return { success: true, products: products };

  } catch (error) {
    console.error("Error loading products:", error.message);
    return { success: false, error: error.message };
  }
};


/**
 Adding new products 
 */
export const addNewProduct = async (productDetail) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No authenticated user");

    const productref = doc(collection(db, "products"));
    const currentUserdata = await getCurrentuserdata();
    const product = await setDoc(productref, {
      pid: productref.id,
      status: "Available",
      soldBy: user.uid,
      soldBy_name: currentUserdata.firstName,
      dateListed: new Date(),
      ...productDetail
    });

    return { success: true , product:product };

  } catch (error) {
    console.log("Failed to add product: ", error.message);
    return { success: false, error: error.message };
  }
};

export const updateProductDetail = async (productDetail, pid) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No authenticated user");

    const productref = doc(db, "products", pid);
    await updateDoc(productref, productDetail);
    return { success: true };

  } catch (error) {
    console.log("Failed to update product: ", error.message);
    return { success: false, error: error.message };
  }

};

export const deleteProduct = async (pid) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No authenticated user");

    const productRef = doc(db, "products", pid);
    await deleteDoc(productRef);
    return { success: true };

  } catch (error) {
    console.log("Failed to delete product: ", error.message);
    return { success: false, error: error.message };
  }
}

export const fetchProducts = async (UserID) => {
  try {
    const listings_list = collection(db, "products");
     const listing_query = query(
      listings_list,
      where("status", "==", "Available"),
      where("soldBy", "!=", UserID)
    );

    const listings_snapshot = await getDocs(listing_query);
    const products = [];

    if (listings_snapshot.empty) {
      console.log("No products found for this user.");
      return { success: true, products: null };
    } else {
      listings_snapshot.forEach(Docs => {
        products.push({
          ...Docs.data()
        });
      });
    }
    return { success: true, products: products };

  } catch (error) {
    console.log("Failed to fetch products from the db: ", error.message);
    return { success: false, error: error.message };
  }
}