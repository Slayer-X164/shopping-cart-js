const shop = document.querySelector("#shop")

let generateShop = ()=>{
    return shop.innerHTML = (shopItemsData.map((x)=>{
        //the map will target each object in the array and will execute the function one by one
        let{id,img,name,desc,price}=x

        return `<div id=product-id-${id} class="item">
                <img  src="${img}" alt="img">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-section">
                        <h2>$${price}</h2>
                        <div class="buttons">
                            <i class="fa-solid fa-minus"></i>
                            <div id=${id} class="quantity">0</div>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
            </div>`
    }).join(""))
}
generateShop()


function sideBarToggle(){
    const sideBarToggle = document.querySelector(".sideBarToggle")
const closeBtn = document.querySelector(".closeBtn")
const sidebar = document.querySelector(".sidebar")
sideBarToggle.addEventListener("click",()=>{
    console.log("he");
    sidebar.classList.toggle("toShowSideBar")

})
closeBtn.addEventListener("click",()=>{
    console.log("hi");
    sidebar.classList.remove("toShowSideBar")

})
}
sideBarToggle()
