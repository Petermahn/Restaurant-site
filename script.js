window.addEventListener("load", () => {
    setInterval(() => {
        document.querySelector("#preloader").style.display= 'none'
        document.querySelector('.body').style.display = 'block';   
    }, 1500); 
})

const menuBtns = document.querySelectorAll('.menu-btn');
const foodItems = document.querySelectorAll('.food-item');

let activeBtn = "featured";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showFoodMenu(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn(){
    menuBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showFoodMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    foodItems.forEach((item) => {
        if(item.classList.contains(activeBtn)){
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}

let purchase = document.querySelectorAll("#Order");

purchase.forEach(function (order) {
        order.addEventListener('click', function () {
            open()
        });
    })