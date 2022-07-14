const loginEmail = document.querySelector('#login-email');
const loginSenha = document.querySelector('#login-password');
const loginBtn = document.querySelector('#login-btn');
const agreementBox = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
const charCounter = document.querySelector('#counter');
const comentario = document.querySelector('#textarea');
const evaluationForm = document.querySelector('#evaluation-form');
const trybewartsFormLogo = document.querySelector('#trybewarts-forms-logo');

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
  if (agreementBox.checked === false) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
});

comentario.addEventListener('input', () => {
  charCounter.textContent = 500 - comentario.value.length;
});

function pegaInfo() {
  const usuario = [];
  usuario.push(document.querySelector('#input-name').value);
  usuario.push(document.querySelector('#input-lastname').value);
  usuario.push(document.querySelector('#input-email').value);
  usuario.push(document.querySelector('#house').value);
  usuario.push(document.querySelector('input[name="family"]:checked').value);
  return usuario;
}

function nomeCompleto() {
  const informações = pegaInfo();
  const nomePerfil = document.createElement('li');
  nomePerfil.textContent = `Nome: ${informações[0]} ${informações[1]}`;
  return nomePerfil;
}

function emailPerfil() {
  const informações = pegaInfo();
  const email = document.createElement('li');
  email.textContent = `Email: ${informações[2]}`;
  return email;
}

function casaPerfil() {
  const informações = pegaInfo();
  const house = document.createElement('li');
  house.textContent = `Casa: ${informações[3]}`;
  return house;
}

function familiaPerfil() {
  const informações = pegaInfo();
  const family = document.createElement('li');
  family.textContent = `Família: ${informações[4]}`;
  return family;
}

function montaPerfil() {
  const perfil = document.createElement('ul');

  perfil.appendChild(nomeCompleto());
  perfil.appendChild(emailPerfil());
  perfil.appendChild(casaPerfil());
  perfil.appendChild(familiaPerfil());
  perfil.id = 'perfil-aluno';

  document.querySelector('main').insertBefore(perfil, trybewartsFormLogo);
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  evaluationForm.style.display = 'none';
  montaPerfil();
});
