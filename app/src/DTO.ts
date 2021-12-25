export interface StockDTO {
  id: number;
  currentPrice: number;
  code: string;
  name: string;
  shares: number;
  description: string;
}

export interface StockDetailDTO extends StockDTO {
  marketValue: number;
  data: StockDataDTO[];
}

export type StockDataDTO = {
  date: string;
  price: number;
};
