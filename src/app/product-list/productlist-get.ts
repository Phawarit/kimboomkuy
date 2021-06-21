



export interface allproduct {
  id: number;
  model: Model[];
  price: string;
  amount?: any;
  description?: any;
  category: Category[];
  available: boolean;
  color: Category[];
  storage: Storage[];
  brand: Category[];
}

interface Storage {
  id: number;
  size: string;
  created_at: string;
  updated_at: string;
}

interface Category {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

interface Model {
  id: number;
  name: string;
  brand_id: number;
  created_at: string;
  updated_at: string;
}