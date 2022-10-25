function buildGeoPage() {
    console.log("Building geocities page");

    const whois = document.getElementById("whois");
    whois.innerHTML = whoisRoot.split(" Try")[0];

    const cvTable = document.getElementById("cv");
    for (p in cv) {
        const row = cvTable.insertRow(-1);
        const logoCell = row.insertCell();
        const descriptionCell = row.insertCell();
        const urlCell = row.insertCell();

        logoCell.setAttribute("class", "cv-photo");
        descriptionCell.setAttribute("class", "cv-description");

        // <img> of company logo
        const logoImgTag = document.createElement("img");
        logoImgTag.setAttribute("src", `images/${p}.jpg`);
        logoImgTag.setAttribute("alt", `${cv[p].name}`);

        if (cv[p].url != "(inactive)") {
            // add logo w company link to table
            const logoLinkImgTag = document.createElement("a");
            logoLinkImgTag.setAttribute("href", cv[p].url);
            logoLinkImgTag.setAttribute("target", `_blank`);
            logoLinkImgTag.setAttribute("alt", `${cv[p].name}`);
            logoLinkImgTag.appendChild(logoImgTag);
            logoCell.appendChild(logoLinkImgTag);

            // add company URL to table
            const urlATag = document.createElement("a");
            urlATag.setAttribute("href", cv[p].url);
            urlATag.setAttribute("alt", `${cv[p].name}`);
            urlATag.setAttribute("target", "_blank");
            urlATag.innerHTML = cv[p].url;
            urlCell.appendChild(urlATag);            
        } else { // inactive company doesn't have links
            logoCell.appendChild(logoImgTag);

            urlCell.innerHTML = cv[p].url;
        }
        
        // add company description to table
        descriptionCell.innerHTML = cv[p].description;
    }

    const teamTable = document.getElementById("team");
    for (t in team) {
        const row = teamTable.insertRow(-1);
        const photoCell = row.insertCell();
        const nameCell = row.insertCell();
        const titleCell = row.insertCell();
        const descriptionCell = row.insertCell();

        photoCell.setAttribute("class", "team-photo");
        descriptionCell.setAttribute("class", "team-description");

        const photoImgTag = document.createElement("img");
        photoImgTag.setAttribute("src", `images/geo/${t}2.jpg`);
        photoImgTag.setAttribute("alt", `${team[t].name}`);
        photoCell.appendChild(photoImgTag);

        const linkedinATag = document.createElement("a");
        linkedinATag.setAttribute("href", team[t].linkedin);
        linkedinATag.setAttribute("alt", `${team[t].name}`);
        linkedinATag.innerHTML = team[t].name;
        nameCell.appendChild(linkedinATag);

        titleCell.innerHTML = team[t].title;
        descriptionCell.innerHTML = team[t].description;
    }
}