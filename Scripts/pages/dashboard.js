import {
    auth,
    db,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    setDoc,
    doc,
    getDocs,
    getDoc,
    updateDoc,
    collection,
    query,
    where
} from "../../firebase.js";

document.addEventListener("DOMContentLoaded", function () {


    async function get_item_sold(user_id) {
        try {
            const listing_collection = collection(db, "products");
            const listing_query = query(listing_collection, 
                where("soldBy", "==", user_id),
                where ("status", "==", "sold")
            );
            const listing_snapshot = await getDocs(listing_query);
    
            if (listing_snapshot.empty) {
                console.log("No items sold by this user.");
                return;
            }
            let items = [];
            listing_snapshot.forEach(doc => {
                const data = doc.data();
                if(data.status === "Available"){
                    items.push(data);
                    console.log(data); 
                }
            });

            create_item_row(items);
    
        } catch (error) {
            console.error("Error fetching sold items:", error);
        }
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            fetchuser_profile(user);
        }
    });

    async function fetchuser_profile(user) {
        try {
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const userdata = docSnap.data();
                const userProfile = userdata.avatar || "../Images/11.png";
                const header_pic = document.getElementById("profile_pic");
                if (header_pic) header_pic.src = userProfile;
                console.log("User found");
                get_item_sold(user.uid);

            }
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    const body = document.body;
    const main_content = document.querySelector(".main_content");
    if (main_content) {
        body.appendChild(main_content);
    }
    
    const main_title_overview = document.createElement("h1");
    main_title_overview.innerText = "Overview";
    main_title_overview.classList.add("header_title_h1");
    main_content.appendChild(main_title_overview);

    const content_box = document.createElement("div");
    content_box.classList.add("content_box");

    const total_earnings = document.createElement("div");
    total_earnings.classList.add("overview_div");
    total_earnings.id = "total_earning";

    const display_earning = document.createElement("div");
    display_earning.classList.add("display_div");

    const title_container_earning = document.createElement("div");
    title_container_earning.classList.add("title_container");

    const display_earning_value = document.createElement("h2");
    display_earning_value.innerText = "0";
    const display_earning_text = document.createElement("p");
    display_earning_text.innerText = "Total Earnings";

    title_container_earning.append(display_earning_value, display_earning_text);

    const display_earning_icon = document.createElement("i");
    display_earning_icon.classList.add("fa-solid", "fa-euro-sign");

    display_earning.append(display_earning_icon, title_container_earning);

    total_earnings.append(display_earning);

    const total_sold_items = document.createElement("div");
    total_sold_items.classList.add("overview_div");
    total_sold_items.id = "total_sold_items";

    const display_sold = document.createElement("div");
    display_sold.classList.add("display_div");

    const title_container_sold = document.createElement("div");
    title_container_sold.classList.add("title_container");

    const display_sold_title = document.createElement("h2");
    display_sold_title.innerText = "0";
    const display_sold_text = document.createElement("p");
    display_sold_text.innerText = "Total Sold Items";

    title_container_sold.append(display_sold_title, display_sold_text);

    const display_sold_icon = document.createElement("i");
    display_sold_icon.classList.add("fa-solid", "fa-clipboard");

    display_sold.append(display_sold_icon, title_container_sold);
    total_sold_items.append(display_sold);


    const total_bought_items = document.createElement("div");
    total_bought_items.classList.add("overview_div");
    total_bought_items.id = "total_bought_items";

    const display_buy = document.createElement("div");
    display_buy.classList.add("display_div");

    const title_container_buy = document.createElement("div");
    title_container_buy.classList.add("title_container");

    const display_buy_value = document.createElement("h2");
    display_buy_value.innerText = "0";
    const display_buy_text = document.createElement("p");
    display_buy_text.innerText = "Total Bought Items";

    title_container_buy.append(display_buy_value, display_buy_text);

    const display_buy_icon = document.createElement("i");
    display_buy_icon.classList.add("fa-solid", "fa-shopping-cart");

    display_buy.append(display_buy_icon, title_container_buy);
    total_bought_items.append(display_buy);

    content_box.append(total_earnings, total_sold_items, total_bought_items);
    main_content.append(content_box);
    const main_table_cont = document.createElement("div");
    main_table_cont.classList.add("main_table_cont");

    const title_overview = document.createElement("h2");
    title_overview.innerText = "Earnings by Item";
    title_overview.classList.add("title_overview");
    main_table_cont.append(title_overview);
    main_content.appendChild(main_table_cont);

    //new userDashboardData( main_table_cont, display_sold_title, display_buy_value, display_earning_value);

    function create_item_row(items) {
        items.forEach(item => {
            const item_card = document.createElement("div");
            item_card.classList.add("item_row");

            const item_name = document.createElement("span");
            item_name.classList.add("item_name");
            item_name.innerText = `${item.name}`;

            const item_date = document.createElement("span");
            item_date.classList.add("item_date");
            const date = item.dateListed.toDate();
            const formatted_date = date.toLocaleString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric"
            });
            item_date.innerText = formatted_date;

            const item_price = document.createElement("span");
            item_price.classList.add("item_price");
            item_price.innerText = ` $${item.price}`;

            item_card.append(item_name, item_date, item_price);
            main_table_cont.appendChild(item_card);

        });
    }



});

