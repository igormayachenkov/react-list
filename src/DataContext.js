import React from "react";

// guide: https://www.taniarascia.com/using-context-api-in-react/

const DataContext = React.createContext()

export const DataProvider = DataContext.Provider
export const DataConsumer = DataContext.Consumer

export default DataContext
