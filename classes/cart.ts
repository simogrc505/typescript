import { CartInterface } from '../interfaces/cart'
import { ProductInterface } from '../interfaces/product'
import HTTPRquest from '../microservices/send_data'

export class Cart implements CartInterface {
  products: ProductInterface[];

  constructor(products: ProductInterface[]) {
    this.products = products;
  }
// aggiungo prodotto all'array
  addProduct(p: ProductInterface) {
    this.products.push(p);
    return this.products
  }
// NON richiesto : ordino prodotti in asc o desc
  getProductsOrderedByPrice(sort: "asc" | "desc"): ProductInterface[] {
    if (sort === "asc") {
      return this.products.sort((p1, p2) => {
        let v1: number = p1.price;
        let v2: number = p2.price;
        return v1 - v2;
      });
    } else {
      return this.products.sort((p1, p2) => {
        let v1: number = p1.price;
        let v2: number = p2.price;
        return v2 - v1;
      });
    }
  }
  // il tag è un parametro opzionale, se c'è devo filtrare solo per quel tag
  getTotalPrice(tag?: string): number {
    if (!tag) {
      return this.products.reduce((a, b) => +a + +b.price, 0);
    } else {
      const filter_products = this.products.filter(obj => obj.tag === tag)
      return filter_products.reduce((a, b) => +a + +b.price, 0);
    }
  }
 // ritorno array vuoto
  emptyCart(): never[] {
    return this.products = []
  }
// filtro l'array con gli id diversi da quello che voglio cancellare
  deleteProduct(id: string) {
    return this.products.filter(e => e.id !== id)
  }

  async sendData(array: object) {
    const request = new HTTPRquest();
    return await request.uploadData(array)
  }
}