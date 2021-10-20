const name = prompt('Inserisci il tuo nome?');
const surname = prompt('Inserisci il tuo cognome?');
const favoriteColor = prompt('Inserisci il colore preferito?');

const password = name + surname + favoriteColor + 21;

document.getElementById('yourpassword').innerHTML = password;
