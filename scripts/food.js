async function random(){
    try{
        const search = document.getElementById('navbar-search').value;
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const data = await res.json();
        const food = data.meals;
        appendFood1(food)
    }catch(err){
        console.log(err)
    }
}

random()



let food_div = document.getElementById('showFood');

async function searchfood(){

    try{
        const search = document.getElementById('navbar-search').value;
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const data = await res.json();
        const food = data.meals;
        return food;
    }catch(err){
        console.log(err)
    }
}

    function appendFood(data){

        food_div.innerHTML = null;

        if(data == null){
            let img2 = document.createElement('img')
            img2.src = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/b52cad60636009.5a5478f0990fa.gif';
            img2.setAttribute('id', 'notfound')
            food_div.append(img2);
        }else{
            data.forEach(function(e){

                let div = document.createElement('div');
    
                let h4 = document.createElement('h4');
                h4.innerText = e.strMeal;
    
                let img = document.createElement('img')
                img.src = e.strMealThumb;
    
                let price = document.createElement('p');
                price.innerText = "Rs." + Math.floor(Math.random() * (1000 - 100 + 1) + 100)
    
                let button = document.createElement('button');
                button.innerText = "Order Now";
                button.onclick = ()=>{
    
                    orderfood(e)
                }
    
                div.append(img, h4, price, button)
                food_div.append(div);
                console.log(food_div)
            })
        }
    }

var arr = JSON.parse(localStorage.getItem('ls')) || []

function orderfood(e){

    localStorage.setItem('ls', JSON.stringify(e))
    window.location.href = 'orderfood.html';
}

async function main(){

    let data = await searchfood();

    if(data === undefined){
       return false;
    }

    appendFood(data);
}

var id;
function debounce(func, delay){
    if(id){
        clearTimeout(id);

        id = setTimeout(function (){
            func();
        }, delay)
    }
}


function appendFood1(data){

    food_div.innerHTML = null;

    data.forEach(function(e){

        let div = document.createElement('div');

        let h4 = document.createElement('h4');
        h4.innerText = e.strMeal;

        let img = document.createElement('img')
        img.src = e.strMealThumb;

        let price = document.createElement('p');
        price.innerText = "Rs." + Math.floor(Math.random() * (1000 - 100 + 1) + 100)

        let button = document.createElement('button');
        button.innerText = "Order Now";
        button.onclick = ()=>{

            orderfood(e)
        }

        div.append(img, h4, price, button)
        food_div.append(div);
        console.log(food_div)
    })
}

var amount = JSON.parse(localStorage.getItem('amount'));
var wal = document.getElementById('showWallet');

wal.innerText = "Your Wallet Amount is:    " + "Rs." + amount;