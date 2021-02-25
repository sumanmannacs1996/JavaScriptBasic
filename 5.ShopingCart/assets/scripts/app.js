const productList={
    products:[
        {
            title:"A Cycle",
            imageUrl:"assets/image/Cycle.png",
            price:40000,
            description:"A Electric bicycle!!"
        },
        {
            title:"A Motor Cycle",
            imageUrl:"assets/image/Bike.png",
            price:120000,
            description:"A cruiser moror bike!!"
        },
        {
            title:"A Car",
            imageUrl:"assets/image/Car.jpeg",
            price:959999,
            description:"A Beautiful car!!"
        }
    ],
    render(){
        const RENDER_HOOK=document.getElementById("app");
        let productList =document.createElement('ul');
        productList.classList.add("product-list");
        for(let product of this.products){
            let productElement =document.createElement("li");
            productElement.classList.add("product-item");
            productElement.innerHTML=`
            <div>
                <img src="${product.imageUrl}" alt="${product.title}">
                <div class="product-item__content">
                    <h2>${product.title}</h2>
                    <h3>₹${product.price}</h3>
                    <p>${product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            `;
            productList.append(productElement);
        }
        RENDER_HOOK.append(productList);

    }
};
productList.render();