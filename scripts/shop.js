async function showItems(){

    try{
        const res = await fetch("https://shop-funmall-db.herokuapp.com/shops");
        const data = await res.json();
        appendItems(data)
        console.log(arr)

    }catch(err){
        console.log("err", err)
    }
}

showItems();


function appendItems(arr){
    
    arr.map((e)=>{

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = e.image;

        let title = document.createElement("h4");
        title.innerText = e.name;

        let amount = document.createElement("p");
        amount.innerText = "Rs." + `${e.price}`;

        let button = document.createElement('button');
        button.innerText = "Add to Cart"
        button.onclick = ()=>{
            addtocart(e)
        }

        div.append(img, title, amount, button);

        document.getElementById("showitem").append(div);
        
    })
}

var arr = JSON.parse(localStorage.getItem('addtocart')) || [];
var count;




function addtocart(e){
    document.getElementById('round').innerText = "";

    if(arr == []){
        count = 0;
    }else{
        count = arr.length + 1;
    }
   
    arr.push(e);
    localStorage.setItem('addtocart', JSON.stringify(arr))

    document.getElementById('round').innerText = count;
}

window.addEventListener("load", function(){
    document.getElementById('round').innerText = "";
    if(arr.length == 0){
        count = 0;
    }else{
        count = arr.length;
    }
    document.getElementById('round').innerText = count;
})