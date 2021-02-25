class PRODUCT{
    constructor(title,imageUrl,price,description){
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
};

class PRODUCT_ITEM{
    constructor(product){
        this.product = product;
    }

    addToCart(){
        console.log("Adding Product To Cart....");
        console.log(this.product);
    }

    renderProduct(){
        let productElement =document.createElement("li");
            productElement.classList.add("product-item");
            productElement.innerHTML=`
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>₹${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            `;
            const addCartButton = productElement.querySelector("button");
            addCartButton.addEventListener('click',this.addToCart.bind(this));
            return productElement;
    }

};

class PRODUCT_LIST {
    products =[
        new PRODUCT("A Cycle","assets/image/Cycle.png",40000,"A Electric bicycle!!"),
        new PRODUCT("A Motor Bike","assets/image/Bike.png",120000,"A cruiser motor bike!!"),
        new PRODUCT("A Car","assets/image/Car.jpeg",959999,"A beautiful car")
    ]
    constructor(){}
    
    renderList(){
        let productList =document.createElement('ul');
        productList.classList.add("product-list");
        for(let item of this.products){
            const product_item = new PRODUCT_ITEM(item);
            const rendered_product = product_item.renderProduct();
            productList.append(rendered_product);
        }
        return productList;
    }
};

class SHOPING_CART{
    cartItems =[];
    addProduct(){
        this.cartItems.push(product);
        this.totalCartValue.innerHTML =`<h2>Total: ₹${1}</h2>`
    }

    renderShopingCart(){
        const cartElement =document.createElement("section");
        cartElement.innerHTML=`
        <h2>Total: ₹${0}</h2>
        <button>Order Now!</button>
        `;
        cartElement.classList.add("cart");
        this.totalCartValue = cartElement.querySelector("h2");
        return cartElement;
    }
};

class SHOP{
    render(){
        const RENDER_HOOK=document.getElementById("app");

        let product_list = new PRODUCT_LIST();
        let pl =product_list.renderList();

        let shoping_cart = new SHOPING_CART();
        let sk =shoping_cart.renderShopingCart();

        RENDER_HOOK.append(sk);
        RENDER_HOOK.append(pl);
    }

}

class APP{
    static start(){
        let shop = new SHOP();
        shop.render();
    }
}

APP.start();