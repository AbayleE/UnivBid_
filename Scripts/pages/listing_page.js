import { Loaduserslistings } from '../components/ProductCard.js';
document.addEventListener("DOMContentLoaded", async function () {
    const body = document.body;
    const body_left = document.createElement("div");
    body_left.classList.add("body_left");

    const container_left = document.createElement("div");
    container_left.classList.add("container_left");

    const logo_container = document.createElement("div");
    logo_container.classList.add("logo_container");

    const img_link = document.createElement("a");
    img_link.href = "index.html";
    img_link.style.cursor = "pointer";

    const img_logo = document.createElement("img");
    img_logo.src = "Images/logo.png";
    img_logo.alt = "Logo";

    img_link.appendChild(img_logo);
    logo_container.appendChild(img_link);

    const pages_container = document.createElement("div");
    pages_container.classList.add("pages_container");


    const pages = ["My Dashboard", "Product", "Product Sale", "Support", "Account", "Sign Out"];
    const page_link = ["Dashboard.html", "sales_page.html", "#", "contact.html", "profile.html", "index.html"];
    const icons = ["fa-chart-line", "fa-store", "fa-bell", "fa-headset", "fa-user", "fa-sign-out"];

    pages.forEach((page, indx) => {
        const links = document.createElement('a');
        links.href = page_link[indx];

        const icon = document.createElement("i");
        icon.classList.add("fa-solid", icons[indx]);

        const span_text = document.createElement("span");
        span_text.textContent = " " + page;

        links.appendChild(icon);
        links.appendChild(span_text);
        pages_container.appendChild(links);
    });

    container_left.appendChild(logo_container);
    container_left.appendChild(pages_container);
    body_left.appendChild(container_left);
    body.appendChild(body_left);

    const body_right = document.createElement("div");
    body_right.classList.add("body_right");

    const header_lp = document.createElement("div");
    header_lp.classList.add("header_lp");

    const header_lp_left = document.createElement("div");
    header_lp_left.classList.add("header_lp_left");

    const header_lp_title = document.createElement("h1");
    header_lp_title.classList.add("header_lp_title");
    header_lp_title.innerText = "Welcome Back";

    const header_lp_subtitle = document.createElement("p");
    header_lp_subtitle.classList.add("header_lp_subtitle");
    header_lp_subtitle.innerText = "User";

    header_lp_title.appendChild(header_lp_subtitle);
    header_lp_left.appendChild(header_lp_title);

    const add_postings = document.createElement("div");
    add_postings.classList.add("searchbar_element");

    const add_product_btn = document.createElement("button");
    add_product_btn.classList.add("register_btn");
    add_product_btn.id = "add_product_btn";
    add_product_btn.innerHTML = " + Add Item";
    add_postings.appendChild(add_product_btn);


    header_lp.append(header_lp_left, add_postings);
    body_right.appendChild(header_lp);

    const listing_board = document.createElement("div");
    listing_board.classList.add("listing_board");
    body_right.appendChild(listing_board);
    body.appendChild(body_right);

    new Loaduserslistings(listing_board,add_product_btn, header_lp_subtitle, body);

});
