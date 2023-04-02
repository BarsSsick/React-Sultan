import { getCartFromLS } from "../../utils/getCartFromLS";

export type CartItem = {
    id: string,
    name: string,
    price: number,
    imageUrl: string,
    volume: string,
    description: string,
    count: number,
}

export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
}