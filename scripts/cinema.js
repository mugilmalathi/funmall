let cinema_div = document.getElementById('showCinema');

async function searchCinema(){

    try{
        const search = document.getElementById('navbar-search').value;
        const res = await fetch(`https://www.omdbapi.com/?apikey=1c0d8b23&s=${search}`);
        const data = await res.json();
        const food = data.Search;
        return food;
    }catch(err){
        console.log(err)
    }
}

    function appendCinema(data){

        cinema_div.innerHTML = null;

        if(data === null){
            let img2 = document.createElement('img')
            img2.src = 'https://i.makeagif.com/media/11-04-2015/mfnzwt.gif';
            img2.setAttribute('id', 'notfound')
            cinema_div.append(img2);
        }else{
            data.forEach(function(e){

                let div = document.createElement('div');
    
                let h4 = document.createElement('h4');
                h4.innerText = e.Title;
    
                let img = document.createElement('img')
                img.src = e.Poster;

                let year = document.createElement('p');
                year.innerText = e.Year;
                
    
                let button = document.createElement('button');
                button.innerText = "Book Tickets";
                button.onclick = ()=>{
                    bookTicket(e)
                    console.log(bookTicket)
                }
    
                div.append(img, h4, year, button)
                cinema_div.append(div);
            })
        }
    }

JSON.parse(localStorage.getItem('ticket')) || []

function bookTicket(e){

    localStorage.setItem('ticket', JSON.stringify(e))
    window.location.href = 'bookticket.html';
}

async function mainCinema(){

    let data = await searchCinema();

    if(data === undefined){
       return false;
    }

    appendCinema(data);
}

var id;
function debounce1(func, delay){
    if(id){
        clearTimeout(id);

        id = setTimeout(function (){
            func();
        }, delay)
    }
}


var amount = JSON.parse(localStorage.getItem('amount'));
var wal = document.getElementById('showWallet');

wal.innerText = "Your Wallet Amount is:    " + "Rs." + amount;