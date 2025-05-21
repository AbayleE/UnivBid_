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

export const getCurrentuserdata = async () => {
    if (!auth.currentUser) return null;

    const doc_ref = doc(db, "users", auth.currentUser.uid);
    const doc_snap = await getDoc(doc_ref);
    return doc_snap.exists() ? doc_snap.data() : null;
};

export const logoutuser = async () => {
    try {
        await signOut(auth);
        return { sucess: true };
    } catch (error) {
        return { error: error.message };
    }
};



export const registerUser = async (First_name, Last_name, email, password, phone = "", university = "", avatar = "", contact_choice = {
    contact_email: true,
    contact_phone: false,
}) => {
    const full_name = First_name + Last_name;
    const url_avatar = `https://robohash.org/${full_name}.png?size=200x200`;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userData = {
            email: email,
            firstName: First_name,
            lastName: Last_name,
            UserID: user.uid,
            phone,
            university,
            avatar:url_avatar,
            contact_choice,
        };

        const docRef = doc(db, "users", user.uid);
        await setDoc(docRef, userData);
        return { success: true, user };
    } catch (error) {
        console.error("Error creating user:", error.message);
        return { success: false, error: error.code };
    }
};

export const signinUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user};

    } catch (error) {
        console.error("Error Signing in user:", error.message);
        return { success: false, error: error.code };
    }
};

