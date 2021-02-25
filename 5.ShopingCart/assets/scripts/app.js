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
            return productElement;
    }

};

class PRODUCT_LIST {
    products =[
        new PRODUCT("A Cycle","assets/image/Cycle.png",40000,"A Electric bicycle!!"),
        new PRODUCT("A Motor Cycle","assets/image/Cycle.png",40000,"A Electric bicycle!!"),
        new PRODUCT("A Car","assets/image/Car.jpeg",120000,"A cruiser moror bike!!")
    ]
    constructor(){}
    
    renderList(){
        const RENDER_HOOK=document.getElementById("app");
        let productList =document.createElement('ul');
        productList.classList.add("product-list");
        for(let item of this.products){
            const product_item = new PRODUCT_ITEM(item);
            const rendered_product = product_item.renderProduct();
            productList.append(rendered_product);
        }
        RENDER_HOOK.append(productList);
    }
};

let product_list = new PRODUCT_LIST();
product_list.renderList();