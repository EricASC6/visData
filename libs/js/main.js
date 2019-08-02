console.log("User Info");

// Getting user info and putting it in a table
let users = [];

for (let i = 0; i < data["results"].length; i++) {
    let user = {};
    user.name = `${data.results[i].name.first} ${data.results[i].name.last}`; // Name
    user.img = data.results[i].picture.medium; // Photo
    user.email = data.results[i].email; // Email
    user.phoneNum = data.results[i].phone; // Phone #
    users.push(user); // Adding user to the array 
}

console.table(users);


// Nav
const navContainer = document.querySelector(".nav-container") ;
for (const user of users) {
    const a = document.createElement("a");
    a.innerHTML = user.name;
    a.href = "#"
    navContainer.appendChild(a);
}

// Create user info function
const userInfo = document.querySelector(".user-info"); // Gets the userinfo div
const name = document.createElement("h1"); // Create h1 element
const img = document.createElement("img"); // Create img tag
const email = document.createElement("p"); // email
const phoneNum = document.createElement("p"); // phone #
let content = [];

const createUserInfo = (event) => {
    event.preventDefault();
    const i = getIndex();
    name.innerHTML = users[i].name;
    email.innerHTML = `Email: ${users[i].email}`;
    phoneNum.innerHTML = `Phone Number: ${users[i].phoneNum}`;
    img.src = users[i].img;
    refresh();
    content.push(name);
    userInfo.appendChild(name);
    userInfo.appendChild(img);
    userInfo.appendChild(email);
    userInfo.appendChild(phoneNum);
}

// Creat getIndex function
function getIndex() {
    const tagName = event.target.innerHTML; // Name of a tag
    for (let u of users) {
        if (u.name === tagName) {
            return users.indexOf(u)
        }
    }
}

// Get rid of previous info
function refresh() {
    if (content.length > 0) {
        content[0].style.display = "hidden";
        content[0].remove();
        content.pop();
    }
}


// Adding event listener to a tag --> create user info box
const aTags = [...document.querySelectorAll("a")]; // List of a tags

for (let i = 0; i < aTags.length; i++) {
    aTags[i].addEventListener("click", createUserInfo);
    aTags[i].addEventListener("click", getIndex)
}



