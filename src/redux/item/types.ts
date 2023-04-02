export type Item = {
    id: string,
    imageUrl: string,
    name: string,
    volume: string,
    barcode: string,
    manufacturer: string,
    brend: string,
    price: number,
    description: string,
    count: number,
}

export interface ItemSliceState {
    items: Item[];
}

export type SearchItemParams = {
    sortBy: string,
    order: string,
    currentPage: string,
    categoryId: string,
}