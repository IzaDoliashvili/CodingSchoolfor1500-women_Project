"use strict";

const users = [];

function registration() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPass = document.getElementById('confirmPassword').value;
  const PassValid = validatePassword(confirmPass);
  if (email.trim() === '' || password.trim() === '' || confirmPass.trim() === '') {
    document.getElementById('regMess').innerHTML = '<p>გთხოვთ შეავსოთ ყველა ველი.</p>';
    return; 
  }

  const EmailValid = validateEmail(email);
  const EmailUnique = isEmailAvailable(email);

  

  if (PassValid && EmailValid && EmailUnique) {
    users.push({ email, password });
    saveUsersToLocalStorage();
    document.getElementById('regMess').textContent = 'წარმატებით გაიარეთ რეგისტრაცია!';
  } else if (!PassValid) {
    document.getElementById('regMess').textContent = 'პაროლი არ აკმაყოფილებს მოთხოვნებს.';
  } else if (!EmailValid) {
    document.getElementById('regMess').textContent = 'შეიყვანეთ მეილი სწორად!';
  } else if (!EmailUnique) {
    document.getElementById('regMess').textContent = 'მეილი უკვე გამოყენებულია,შეიყვანეთ სხვა.';
  }


}





function validatePassword(password) {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[^a-zA-Z]).{8,}$/;
  return passwordRegex.test(password);
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isEmailAvailable(email) {
  return !users.some(user => user.email === email);
}


function saveUsersToLocalStorage() {
  localStorage.setItem('users', JSON.stringify(users));
}


function authorize() {
  const authEmail = document.getElementById('authEmail').value;
  const authPassword = document.getElementById('authPassword').value;

  const authorizedUser = users.find(user => user.email === authEmail && user.password === authPassword);

  if (authorizedUser) {
    document.getElementById('authMess').textContent = 'შედეგი დადებითია!';
  } else {
    document.getElementById('authMess').textContent = 'მეილი ან პაროლი არ ემთხვევა,გთხოვთ შეიყვანეთ ხელახლა';
  }
}



