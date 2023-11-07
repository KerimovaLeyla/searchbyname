const myForm = document.getElementById('form');

const search = document.getElementById('inp');

const myDiv = document.getElementById('mydiv');

const API = 'https://api.github.com/users/'

const btn = document.getElementById('btn')



myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchUser();
});

function searchUser() {
    fetch(API + search.value)
        .then((res) => res.json())
        .then((data) => {
            renderUser(data);
        })
    
}

function renderUser(data) {
    myDiv.innerHTML = "";

    const h2 = document.createElement('h2');
    h2.textContent = data.login;

    const userImage = document.createElement('img');
    userImage.src = data.avatar_url;

    const followers = document.createElement('p');
    followers.textContent = `Followers: ${data.followers}`;

    const following = document.createElement('p');
    following.textContent = `Following: ${data.following}`;


    myDiv.append(h2, userImage, followers, following);
}









