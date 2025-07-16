import axios from "axios";
import type {
  Product,
  Provider,
  ActivePeriod,
  FlashSale,
  ProductQuery,
} from "@/api/response";

const BASE_URL = "http://localhost:3000";

const getAllProviders = async (): Promise<Provider[]> => {
  try {
    const res = await axios.get(`${BASE_URL}/providers`);
    return res.data;
  } catch (error) {
    console.error("fail to get providers", error);
    throw error;
  }
};

const getAllActivePeriods = async (): Promise<ActivePeriod[]> => {
  try {
    const res = await axios.get(`${BASE_URL}/activePeriods`);
    return res.data;
  } catch (error) {
    console.error("fail to get active periods", error);
    throw error;
  }
};

const getAllProducts = async ({
  search,
  provider,
  activePeriods,
}: ProductQuery = {}): Promise<Product[]> => {
  try {
    const params = new URLSearchParams();

    if (search) {
      params.append("name_like", search);
    }

    if (provider) {
      params.append("provider", provider);
    }

    if (activePeriods && activePeriods.length > 0) {
      activePeriods.forEach((period) => {
        params.append("activePeriod", period);
      });
    }

    const queryString = params.toString();
    const url = queryString
      ? `${BASE_URL}/products?${queryString}`
      : `${BASE_URL}/products`;

    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("fail to get products", error);
    throw error;
  }
};

const getProductById = async (id: number): Promise<Product> => {
  try {
    const res = await axios.get(`${BASE_URL}/products/${id}`);
    return res.data;
  } catch (error) {
    console.error("fail to get product by id", error);
    throw error;
  }
};

const getFlashSales = async (): Promise<FlashSale> => {
  try {
    const res = await axios.get(`${BASE_URL}/flashSales`);
    return res.data;
  } catch (error) {
    console.error("fail to get flash sales", error);
    throw error;
  }
};

export {
  getAllProducts,
  getProductById,
  getAllActivePeriods,
  getAllProviders,
  getFlashSales,
};
