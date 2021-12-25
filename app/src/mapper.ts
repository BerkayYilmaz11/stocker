import { StockDataDTO, StockDetailDTO, StockDTO } from "./DTO";
import { Stock, StockData } from "./typings";

const mapStock = (data: StockDTO[]): Stock[] => {
  return data.map((stock) => {
    return {
      id: stock.id,
      name: stock.name,
      code: stock.code,
      currentPrice: `$${stock.currentPrice.toFixed(2)}`,
      shares: stock.shares.toFixed(0),
    };
  });
};

const mapStockDetail = (stock: StockDetailDTO): StockData[] => {
  return [
    {
      id: stock.id,
      name: stock.name,
      code: stock.code,
      currentPrice: `$${stock.currentPrice.toFixed(3)}`,
      data: mapStockDetailData(stock.data),
      description: stock.description,
      marketValue: stock.marketValue,
      shares: stock.shares.toFixed(0),
    },
  ];
};

const mapStockDetailData = (data: StockDataDTO[]) => {
  const labels: string[] = [];
  const prices: number[] = [];
  data.forEach((item, index) => {
    prices.push(item.price);
    if (index % 5 == 0) labels.push(item.date);
  });
  return {
    labels,
    prices,
  };
};

export default { mapStock, mapStockDetailData, mapStockDetail };
