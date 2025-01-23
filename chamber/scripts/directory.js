
// navigation
const navLinks = document.querySelector(".nav-links");
const menuBtn = document.querySelector("#icon-menu");

menuBtn.addEventListener("click", ()=> {
    navLinks.classList.toggle("open");
    menuBtn.classList.toggle("open");
});


// last Modified
const dateObject = new Date;
const getCurrentYEar = document.querySelector("#currentYear").textContent += dateObject.getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified ${new Date(document.lastModified).toLocaleDateString()}`





// Directory
const getCompanyGrid = document.querySelector("#comp-grid");
const getCompanyList = document.querySelector("#comp-list");

const getGridBtn = document.querySelector("#grid-btn");
const getListBtn = document.querySelector("#list-btn");

let allCompanies = [];

const url = "data/members.json"
 
async function getCompanies() {
    const response = await fetch(url);
    const data = await response.json();
    allCompanies = data.companies;

    displayGrid(allCompanies)
    displayList(allCompanies)

}
getCompanies();

// Show grid
getGridBtn.addEventListener("click", () => {
    getCompanyList.style.display = "none";
    getCompanyGrid.style.display = "grid";
});

// Show list
getListBtn.addEventListener("click", () => {    
    getCompanyGrid.style.display = "none";
    getCompanyList.style.display = "grid";
});




// Build and display grid view
function displayGrid(allCompanies) {
    getCompanyGrid.innerHTML = "";
    
    allCompanies.forEach(allCompany => {
        let container = document.createElement("div");
        container.setAttribute("style", "width: 100%; height: 292px;");
        // container.classList.add(".show-grid");

        let companyLogo = document.createElement("img");
        let slogan = document.createElement("h3");
        let address= document.createElement("p");
        let phoneNo = document.createElement("p");
        let webAddress = document.createElement("a");

        companyLogo.src = allCompany.logo;
        slogan.textContent = allCompany.tagLine;
        address.textContent = allCompany.address;
        phoneNo.textContent = allCompany.phoneNumbers;
        webAddress.textContent = allCompany.websitesUrls;
        webAddress.setAttribute("href", `${allCompany.webAddress}`);
        webAddress.textContent = `Learn More`;
        webAddress.setAttribute("target", "_blank");
        companyLogo.classList.add("images")
        webAddress.classList.add("visit")
        phoneNo.classList.add("add")
        companyLogo.setAttribute("alt", allCompany.name)
        
        container.appendChild(companyLogo);
        container.appendChild(slogan)
        container.appendChild(address);
        container.appendChild(phoneNo);
        container.appendChild(webAddress);
        
        getCompanyGrid.appendChild(container);
        
    });
}


// Build and display list view
function displayList(allCompanies) {
    getCompanyList.innerHTML = "";
    
    allCompanies.forEach(allCompany => {

        let table = document.createElement("div");
        table.classList.add("table-list");

        let name = document.createElement("div");
        let address = document.createElement("div");
        let phoneNumbers = document.createElement("div");
        let websitesUrls = document.createElement("a");

        name.textContent = allCompany.name;
        address.textContent = allCompany.address;
        phoneNumbers.textContent = allCompany.phoneNumbers;
        websitesUrls.textContent = allCompany.websitesUrls;
        websitesUrls.setAttribute("href", `${allCompany.webAddress}`);
        websitesUrls.setAttribute("target", "_blank");
        websitesUrls.setAttribute("style", "color: navy");
        websitesUrls.setAttribute("style", "font-size: larger");
        websitesUrls.setAttribute("style", "font-weight: bolder");
        websitesUrls.classList.add("websitesUrls");

        table.appendChild(name);
        table.appendChild(address);
        table.appendChild(phoneNumbers);
        table.appendChild(websitesUrls);

        getCompanyList.appendChild(table);
        
    });
}