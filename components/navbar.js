export function MyNavbar() {
    const navbarHTMLContext =
        `
        <div id="navbar_brand">
        <a href="">The Drone Club</a>
        </div>

        <div id="nav_links_wrapper">
        <ul>
            <li>
            <div class="nav_item">
                <div class="dot_icon"></div>
                <p class="route_name">services</p>
            </div>
            </li>
            <li>
            <div class="nav_item">
                <div class="dot_icon"></div>
                <p class="route_name">shop now</p>
            </div>
            </li>
            <li>
            <div class="nav_item">
                <div class="dot_icon"></div>
                <p class="route_name">categories</p>
            </div>
            </li>
            <li>
            <div class="nav_item">
                <div class="dot_icon"></div>
                <p class="route_name">account</p>
            </div>
            </li>
        </ul>
        </div>
    `

    return navbarHTMLContext;
}


