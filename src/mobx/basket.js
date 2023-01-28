import { makeAutoObservable } from "mobx";
// import { toJS } from "mobx";
class BasketSale{
    basket = [];
    basketCount = 0;
    constructor() {
        makeAutoObservable(this)
    }

    addtoBasket(product) {
        this.basket = this.basket.push(product)
        this.basketCount = this.basketCount++ ;
        console.log(this.basketCount)
    }
}
export default BasketSale;