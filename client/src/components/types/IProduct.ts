export interface IProduct{
products:ProductItem[];
isLoading: boolean,
isError: boolean
}

export interface ProductItem {
    name:string;
    type: string;
    storage: number;    
    id?:string;
    image?: string
}