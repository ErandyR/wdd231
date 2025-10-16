const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));

const timestampField = document.getElementById("timestamp");

const now = new Date();

const formatted = now.getFullYear() + "-" +
    String(now.getMonth() + 1).padStart(2, '0') + "-" +
    String(now.getDate()).padStart(2, '0') + " " +
    String(now.getHours()).padStart(2, '0') + ":" +
    String(now.getMinutes()).padStart(2, '0') + ":" +
    String(now.getSeconds()).padStart(2, '0');


document.querySelector('#results').innerHTML = `<p>Name: ${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p>Phone: ${myInfo.get('phone')}</p>
    <p>Email: ${myInfo.get('email')}</p>
    <p>Sent on: ${formatted}</p>`;
