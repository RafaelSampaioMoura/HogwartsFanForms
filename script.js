const loginEmail = document.querySelector('#login-email');
const loginSenha = document.querySelector('#login-password');
const loginBtn = document.querySelector('#login-btn');
const agreementBox = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

// console.log(loginBtn);

loginBtn.addEventListener('click', () => {
  const userEmail = loginEmail.value;
  const userSenha = loginSenha.value;

  if (userEmail === 'tryber@teste.com' && userSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreementBox.addEventListener('change', () => {
  if(agreementBox.checked === false) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
});