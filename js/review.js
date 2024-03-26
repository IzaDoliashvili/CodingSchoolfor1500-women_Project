"use strict";

class RandomUser {
    static fetchFromAPI() {
        let URL = 'https://randomuser.me/api/';
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                console.log(data); 
                RandomUser.renderUserData(data);
            })
                
            .catch(error => alert(error));
    }

    static renderUserData(data) {
        console.log(data);
        let user = data.results[0];
        let cardElem = document.querySelector('.card');
        cardElem.innerHTML = `
        <div class="card-head">
            <div class="user-image">
                <img src="${user.picture.large}" alt="">
            </div>
        </div>

            <div class="user-name">
                <span class="user-name-title">${user.name.title}.</span>
                <span class="user-name-full">${user.name.first} ${user.name.last}</span>
            </div>
        </div>

        <div class="card-foot">
            <div class="user-contact-info">
                <span>შაფასება:</span>
                <div class="ratings">
        <a href="#"><i class='bx bxs-star'></i></a>
        <a href="#"><i class='bx bxs-star'></i></a>
        <a href="#"><i class='bx bxs-star'></i></a>
        <a href="#"><i class='bx bxs-star'></i></a>
        <a href="#"><i class='bx bxs-star'></i></a>
      </div>
        
            </div>
        </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate-btn').addEventListener('click', () => {
        console.log('Button clicked'); 
        RandomUser.fetchFromAPI();
    });

    RandomUser.fetchFromAPI();
});

