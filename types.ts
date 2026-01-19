
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  hoverImage: string;
  description: string;
  gsm: number;
  width: string;
  composition: string;
  care: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export enum Category {
  SILK = 'Silk',
  COTTON = 'Cotton',
  LINEN = 'Linen',
  DESIGNER = 'Designer',
  VELVET = 'Velvet'
}
