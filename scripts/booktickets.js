var arr = JSON.parse(localStorage.getItem('ticket'));
console.log(arr)

const show = document.getElementById('bookticket');

const left = document.createElement('div');

const img = document.createElement('img');
img.src = arr.Poster;

left.append(img);

const right = document.createElement('div');

const right1 = document.createElement('div')
const title = document.createElement('h4');
title.innerText = arr.Title;
right1.append(title);

const right2 = document.createElement('div')
const year = document.createElement('h4');
year.innerText = arr.Year;
right2.append(year);

const right3 = document.createElement('div')
const type = document.createElement('h4');
type.innerText = arr.Type;
right3.append(type);

const right4 = document.createElement('div')
const runtime = document.createElement('h4');
runtime.innerText = "Runtime is:  " + Math.floor(Math.random() * (3 - 2 + 1) + 2) + "Hrs" + Math.floor(Math.random() * (40 - 10 + 1) + 10) + "Minutes";
right4.append(runtime);

const right5 = document.createElement('div')
const imdb = document.createElement('h4');
imdb.innerText = "IMBD Rating:  " + Math.floor(Math.random() * (10 - 4 + 1) + 4);
right5.append(imdb);

const right6 = document.createElement('div')
const button = document.createElement('button');
button.innerText = "Book Tickets";
button.onclick = ()=>{
    window.location.href = "ticketbookingpage.html"
}
right6.append(button);

right.append(right1, right2, right3, right4, right5, right6)



show.append(left, right)


// wallet Amount

var amount = JSON.parse(localStorage.getItem('amount'));
var wal = document.getElementById('showWallet');

wal.innerText = "Your Wallet Amount is:    " + "Rs." + amount;