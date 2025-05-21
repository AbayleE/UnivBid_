import { getallProducts } from '../components/ProductCard.js';

document.addEventListener("DOMContentLoaded", async function () {

    const body = document.body;
    const body_left = document.createElement("div");
    body_left.classList.add("body_left");

    const container_left = document.createElement("div");
    container_left.classList.add("container_left");

    const icon_navbar = document.createElement("i");
    icon_navbar.classList.add("fa-solid","fa-bars");
    icon_navbar.style.color = "Black";
    icon_navbar.style.zIndex= 100;
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
    const page_link = ["Dashboard.html", "#", "listing_page.html", "contact.html", "profile.html", "index.html"];
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

    container_left.appendChild(icon_navbar);
    container_left.appendChild(logo_container);
    container_left.appendChild(pages_container);
    body_left.appendChild(container_left);
    body.appendChild(body_left);



    const body_right = document.createElement("div");
    body_right.classList.add("body_right");

    const header_sales = document.createElement("div");
    header_sales.classList.add("header_sales");

    const search_bar = document.createElement("div");
    search_bar.classList.add("search_bar");

    const search_element = document.createElement("div");
    search_element.classList.add("searchbar_element");
    const search_input = document.createElement("input");
    search_input.placeholder = " ";
    search_input.type = "text";
    search_input.name = "search_input";

    const search_btn = document.createElement("button");
    search_btn.id = "search_btn";
    search_btn.innerHTML = "<i class='fa-solid fa-magnifying-glass'></i>";

    search_element.append(search_input, search_btn);
    search_bar.appendChild(search_element);
    header_sales.append(search_bar);

    const header_sales_right = document.createElement("div");
    header_sales_right.classList.add("header_sales_right");

    const display_element = document.createElement("div");
    display_element.classList.add("display_element");
    display_element.id = "display_element";

    const icon_display = [
        "fa-table-cells-large",
        "fa-bell",
        "fa-shopping-cart",
        "fa-user-circle"
    ];

    const icon_page = [
        "#",
        "#",
        "shopping_list.html",
        "profile.html"
    ]

    icon_display.forEach( (icon, indx) => {
        const link = document.createElement("a");
        link.href = icon_page[indx];
        const display_list = document.createElement("i");
        display_list.id = "display_list";
        display_list.classList.add(icon, "fa-solid");
        link.appendChild(display_list);
        display_element.appendChild(link);
    });

    header_sales_right.appendChild(display_element);
    header_sales.appendChild(header_sales_right);

    body_right.appendChild(header_sales);


    const listing_board = document.createElement("div");
    listing_board.classList.add("listing_board");
    body_right.appendChild(listing_board);
    body.appendChild(body_right);

    new getallProducts(listing_board);

});
