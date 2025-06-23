import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";
import EditActionWindow from "./EditActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
  openEditWindow: (uid) => {},
  closeEditWindow: () => {}
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [isEditWindowOpen, setIsEditWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
 
  // to open the buy input field
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };
  
  // to close the buy input field
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // to open the sell input field
  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  // to close the sell input field
  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  // to open the edit input field
  const handleOpenEditWindow = (uid) => {
    setIsEditWindowOpen(true);
    setSelectedStockUID(uid);
  };

  // to close the edit input field
  const handleCloseEditWindow = () => {
    setIsEditWindowOpen(false);
    setSelectedStockUID("");

  }

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        openEditWindow: handleOpenEditWindow,
        closeEditWindow: handleCloseEditWindow
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid = {selectedStockUID} />}
      {isEditWindowOpen && <EditActionWindow uid = {selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
