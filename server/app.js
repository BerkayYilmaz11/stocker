var faker = require("faker");
const fs = require("fs");

var database = { stocks: [], stockDetails: [] };

for (var i = 1; i <= 100; i++) {
  const finance = faker.finance;

  const stocks = {
    id: i,
    name: finance.currencyName(),
    description: faker.lorem.sentence(),
    code: finance.currencyCode(),
    currentPrice: Math.random() * 1000,
    shares: Math.random() * 100000,
  };

  database.stocks.push({ ...stocks });

  const stockDetail = {
    ...stocks,
    marketValue: stocks.currentPrice * stocks.shares,
    data: [],
  };

  for (var j = 1; j <= 31; j++) {
    stockDetail.data.push({
      id: j,
      date: `DEC ${j}`,
      price: Math.random() * 1000,
    });
  }

  database.stockDetails.push({ ...stockDetail });
}

fs.writeFileSync("./db.json", JSON.stringify(database));
