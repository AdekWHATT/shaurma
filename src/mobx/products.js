import { makeAutoObservable } from "mobx";
import data from '../products.json'
class Products {
    products = [...data]
    constructor() {
        makeAutoObservable(this)
    }

    // fetchProducts() {
        
    // }
}


export default Products;