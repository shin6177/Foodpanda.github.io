const obj = [
    {"img": "https://storage.googleapis.com/mb-mkt-neo-prod-1-uploads/pandamart_pop_up_store_3_43e317d8ce/pandamart_pop_up_store_3_43e317d8ce.jpg"},
    {"img": "https://static.dezeen.com/uploads/2018/11/bobs-select-liquor-store-design-reserve-beijing-interiors_dezeen_2364_col_6.jpg"},
    {"img": "https://media2.malaymail.com/uploads/articles/2020/2020-12/fdpanb1012.jpg"},
    {"img": "https://mypromo.my/wp-content/uploads/2020/08/foodpanda-pandamartnow-1024x1024.jpg"},
    {"img": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtRwWfIYNLAstI4yl9EjklhBmjQqDEM60DPkBtBEYAC3oFyPTx0T2lGVZPcki25RbKbxkY3sHI2c4wFJHC3yCtvE6HigE2vZDGgkyYQrgzq5gWHCl2PkAH8rBYI2JPFwozC0LOJQmgZpRs2qQXuUi5YfCMzqi8a91nFcGpgZY3zJyoTKyQAbuBQy3Vpw/s900/IMG-5986.jpg"},
    {"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQR8iMIFMtQnoePhQKTkohJnj_K8qdsza0w&usqp=CAU"}
]

const box = document.querySelectorAll(".box")

box.forEach((boc, id)=>{
    //  boc.style.backgroundImage = `url(${obj[id].img})`
     boc.style.background = `linear-gradient(to bottom,rgba(255,0,0,0),rgb(0,0,0)), url(${obj[id].img})`
})




//navbar cross
let bar = document.querySelector(".bar")
let cross = document.querySelector(".cross")
let navlistdown = document.querySelector(".navlist-down")

bar.addEventListener("click", function(){
    bar.style.visibility = "hidden"
    bar.style.display = "none"
    navlistdown.style.display ="block"
    cross.style.visibility = "visible"
    cross.style.display = "inline"

})
cross.addEventListener("click", function(){
    cross.style.visibility = "hidden"
    bar.style.display = "inline"
    navlistdown.style.display ="none"
    bar.style.visibility = "visible"
})




const container = document.querySelector(".container")
const boxes = document.querySelector(".boxes")

// keep track of user's mouse down and up 
let isPressedDown = false;
//x horizontal space of cursor from the inner container
let cursorXspace;
container.addEventListener("mousedown", (e)=>{
    isPressedDown = true;
    cursorXspace = e.offsetX - boxes.offsetLeft;
    container.style.cursor = "grabbing"
})

window.addEventListener('mouseup', ()=>{
    container.style.cursor = "grab"
})
window.addEventListener('mouseup', ()=>{
    isPressedDown = false;
})

container.addEventListener("mousemove", (e)=>{
    if(!isPressedDown) return;
    e.preventDefault();
    boxes.style.left = `${e.offsetX - cursorXspace}px`
    boundbox();
})

function boundbox(){
    const container_rect = container.getBoundingClientRect();
    const boxes_rect = boxes.getBoundingClientRect()

    if(parseInt(boxes.style.left) > 0){
        boxes.style.left = 0;
    }else if(boxes_rect.right < container_rect.right){
        boxes.style.left = `-${boxes_rect.width - container_rect.width}px`

    }
}
