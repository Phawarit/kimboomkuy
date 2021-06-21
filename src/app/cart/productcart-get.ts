


export interface productcart {
    id: number;
    name: string;
    base_price: string;
    brand: string;
    amount: number;
    description: string;
    category: Category[];
    available: boolean;
    masters_data: Mastersdatum[];
  }
  
  interface Mastersdatum {
    id: number;
    color: string;
    storage: string;
    additional_price: string;
    product_id: number;
    amount: number;
    created_at: string;
    updated_at: string;
  }
  
  interface Category {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }