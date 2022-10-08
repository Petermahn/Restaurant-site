window.addEventListener("load", () => {
    setInterval(() => {
        document.querySelector("#preloader").style.display= 'none'
        document.querySelector('.body').style.display = 'block';   
    }, 1500); 
})

// document.querySelector("#order").addEventListener('click', ()=>{
//     let yes = confirm('Are you sure you want to purchase this?')
//     if(yes == true ){
//         alert('Purchase Successful');
//     }else{
//         alert('Purchase Unsuccessful')
//     }
//     open("index.html", "_self")
// });

let popup = document.getElementById('popup');

function openPopup(){
    popup.classList.add("open-popup")
}

function closePopup(){
    popup.classList.remove("open-popup")
}

document.querySelector('.ok').addEventListener('click', c);

function c(){
    open("index.html","_self")
}

// let opt = document.getElementById('quantity').s;
// opt.addEventListener('change', function(){
//     if(opt.ariaSelected == 9){
//         prompt('How Much Do You Want')
//     }
// })
// let value = opt.options[quantity.selectedIndex].value
// if(value == 9){
// }