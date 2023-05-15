import React, { createContext, useContext } from "react";
import Portfolio from "../api/portfolio";
import PortfolioClient from "../api/portfolioClient";

export const ApiContext = createContext();

const client = new PortfolioClient();
const portfolio = new Portfolio(client);

export function ApiProvider({ children }) {
  return (
    <ApiContext.Provider value={{ portfolio }}>{children}</ApiContext.Provider>
  );
}

export const usePortfolio = () => {
  return useContext(ApiContext);
};
