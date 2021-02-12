import { ProductInterface } from './product'
export interface CartInterface {

  products: ProductInterface[]

  addProduct(p: ProductInterface): ProductInterface[]
  deleteProduct(id: string) : ProductInterface[]
  getProductsOrderedByPrice(sort: 'asc' | 'desc'): ProductInterface[]
  emptyCart(): never[]
  getTotalPrice(tag?: string): number
  sendData(products: Number[]): Promise<object>
}