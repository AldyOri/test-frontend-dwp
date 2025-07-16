export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface Provider {
  id: string;
  name: string;
}

export interface ActivePeriod {
  id: string;
  label: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  img: string;
  price: number;
  provider: string;
  quota: string;
  activePeriod: string;
}

export interface CartItem {
  id?: string;
  userId: string;
  userName: string;
  userEmail: string;
  productId: string;
  productName: string;
  productDescription: string;
  productImg: string;
  productPrice: number;
  productProvider: string;
  productQuota: string;
  productActivePeriod: string;
  isBought: boolean;
}

export interface FlashSaleItem {
  id: string;
  productId: string;
  productName: string;
  productDescription: string;
  productImg: string;
  originalPrice: number;
  discountPercentage: number;
  discountedPrice: number;
  productProvider: string;
  productQuota: string;
  productActivePeriod: string;
}

export interface FlashSale {
  id: string;
  endTime: string;
  items: FlashSaleItem[];
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface ProductFilters {
  provider?: string;
  activePeriods?: string[];
}

export interface ProductQuery extends ProductFilters {
  search?: string;
  sortBy?: "price" | "name" | "provider";
  sortOrder?: "asc" | "desc";
}
