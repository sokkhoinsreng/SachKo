import { action, observable, get} from 'mobx';
import { getProducts, getId } from '../../service/dataServices';
import { pushToArray } from '../../service/mappingServices';

class Products{

    @observable loading = false;
    @observable  products = [];

    @action
    
    fetchProduct(){
        this.loading = true;
        getProducts().onSnapshot( docs => {
            this.products = pushToArray(docs);
            this.loading = false
        })
    }

    @action addProduct(
        brand,
        categoryType,
        country,
        imageUrl,
        discount,
        origin,
        packing,
        price,
        productName,
        productDescription,
        uom,
        id,

    ){
        this.loading = true;
        
        getProducts().add({
            brand: brand,
            categoryType: categoryType,
            country: country,
            imageUrl: imageUrl,
            discount: discount,
            origin: origin,
            packing: packing,
            price: price,
            productName: productName,
            productDescription: productDescription,
            uom: uom,
            id: getProducts().doc().id
        }).then(() => {
            this.loading = false;
        })
    }

}
export default Products;