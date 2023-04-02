export enum sortPropertyEnum {
    TITLE_DESC= 'title',
    PRICE_DESC= 'price',
    TITLE_ASC= '-title',
    PRICE_ASC= '-price',
  }
  
  export type Sort = {
    name: string;
    sortProperty: sortPropertyEnum;
  }
  
  export interface FilterSliceState {
    categoryId: number;
    currentPage: number;
    sort: Sort;
  }