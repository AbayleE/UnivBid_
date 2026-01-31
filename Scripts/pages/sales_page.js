import { getallProducts } from '../components/ProductCard.js';

document.addEventListener("DOMContentLoaded", async function () {

    const body = document.body;

    document.getElementById("add_product_btn").addEventListener("click", function () {
        window.location.href = "create_auction.html";
    });

    const body_left = document.createElement("div");
    body_left.classList.add("body_left");

    const pages_container = document.createElement("div");
    pages_container.classList.add("pages_container");


    const pages = ["Home","My Dashboard", "Product Sale", "Support", "Account", "Sign Out"];
    const page_link = ["index.html","Dashboard.html", "sales_page.html", "contact.html", "profile.html", "index.html"];
    const icons = ["fa-house","fa-chart-line", "fa-store", "fa-headset", "fa-user", "fa-sign-out"];


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

    body_left.appendChild(pages_container);
    body.appendChild(body_left);

    const body_right = document.createElement("div");
    body_right.classList.add("body_right");

    const listing_board = document.createElement("div");
    listing_board.classList.add("listing_board");
    body_right.appendChild(listing_board);
    body.appendChild(body_right);

    new getallProducts(listing_board);

});
