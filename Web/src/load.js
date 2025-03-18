const loadHeader = (data) => {
    const headerURL = data["Header"];
    document.querySelector("#Header").src = headerURL;
    document.querySelector("#navbar").innerHTML = data["Navbar"];
    document.querySelector("#header-text").innerHTML = data["HeaderText"];
}

const loadProjects = (data) => {

    const images = data["Examples"];
    let text = "";

    for (let i = 0; i < data["ExampleCount"]; i++) {
        if (i % 4 == 0) text += `<div class="w3-row-padding">`;

        text +=
            `<div class="w3-col l3 m6 w3-margin-bottom opacity-zero animate-on-scroll"
            data-animate-in="animate__fadeIn"
            data-animate-out="animate__fadeOut">
                <div class="w3-display-container">
                    <div class="w3-display-topleft w3-black w3-padding">${images[i]["Name"]}</div>
                        <a href="${images[i]["Link"]}" target="_blank">
                            <img src="${images[i]["URL"]}" alt="${images[i]["Name"]}" style="width:100%">
                        </a>
                    </div>
            </div>`;

        if (i + 1 % 4 == 0 || i + 1 == data["ExampleCount"]) text += `</div>`
    }

    document.querySelector("#Examples").innerHTML = text;
}

const loadAbout = (data) => {
    const aboutSection = data["About"];

    document.querySelector("#about").innerHTML = data["AboutText"];

    let text = "";

    for (let i = 0; i < data["AboutCount"]; i++) {
        text +=
            `<div class="w3-col l3 m6 w3-margin-bottom opacity-zero animate-on-scroll"
            data-animate-in="animate__fadeIn"
            data-animate-out="animate__fadeOut">
            <img src="${aboutSection[i]["URL"]}" alt="${aboutSection[i]["Name"]}" style="width:100%">
            <h3>${aboutSection[i]["Name"]}</h3>
            <p class="w3-opacity">${aboutSection[i]["Role"]}</p>
            <p>${aboutSection[i]["Desc"]}</p>
            <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
        </div>`
    }

    document.querySelector("#About").innerHTML = text;
}

const loadContact = (data) => {
    document.querySelector("#form-post").action = data["Contact"];
}

const loadLastImage = (data) => {
    document.querySelector("#last-image").src = data["LastImage"];
}

export { loadHeader, loadProjects, loadAbout, loadContact, loadLastImage }