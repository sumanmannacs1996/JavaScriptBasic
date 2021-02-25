class Product{
    title="DEFAULT";
    imageUrl;
    price;
    description;

    constructor(title,imageUrl,price,description){
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
};

const productList={
    products:[
        new Product("A Cycle","assets/image/Cycle.png",40000,"A Electric bicycle!!"),
        new Product("A Motor Cycle","assets/image/Cycle.png",40000,"A Electric bicycle!!"),
        new Product("A Car","assets/image/Car.jpeg",120000,"A cruiser moror bike!!")
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