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
        APP.addProductToCart(this.product);
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
    addProduct(product){
        this.cartItems.push(product);
        let sum = this.cartItems.reduce((s,p)=>s+(+p.price),0);
        this.totalCartValue.innerHTML =`<h2>Total: ₹${sum}</h2>`
    }
    orderNow(){
        console.log("Ordering....")
        console.log(this.cartItems);
    }

    renderShopingCart(){
        const cartElement =document.createElement("section");
        cartElement.innerHTML=`
        <h2>Total: ₹${0}</h2>
        <button>Order Now!</button>
        `;
        cartElement.classList.add("cart");
        this.totalCartValue = cartElement.querySelector("h2");
        const ORDER_BTN = cartElement.querySelector("button");
        ORDER_BTN.addEventListener("click",this.orderNow.bind(this));
        return cartElement;
    }
};

class SHOP{
    static shoping_cart;
    render(){
        const RENDER_HOOK=document.getElementById("app");

        let product_list = new PRODUCT_LIST();
        let pl =product_list.renderList();

        this.shoping_cart = new SHOPING_CART();
        let sk =this.shoping_cart.renderShopingCart();

        RENDER_HOOK.append(sk);
        RENDER_HOOK.append(pl);
    }

}

class APP{
    static cart;
    static start(){
        let shop = new SHOP();
        shop.render();
        this.cart = shop.shoping_cart;
    }
    static addProductToCart(product){
        this.cart.addProduct(product);
    }
}

APP.start();