import { ProductInterface } from '../interfaces/product'
export class Product implements ProductInterface{
  id: string;
  title: string;
	price: number;
	quantity: number;
	tag: string;

	constructor(id:string, title: string, price: number, quantity: number, tag: string) {
    this.id = id
		this.title = title
		this.price = price
		this.quantity = quantity
		this.tag = tag
	}

	getPrice(): number {
		return this.price
	}

	getTitle(): string {
		return this.title
	}

	getTag(): string {
		return this.tag
	}

	getQuantity(): number {
		return this.quantity
	}
}