export interface ProductInterface {
  id: string;
  title: string;
  price: number;
  quantity: number;
  tag: string;

  getPrice(): number;
  getTitle(): string;
  getTag(): string;
  getQuantity(): number;

}