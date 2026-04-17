import { useState } from "react";
import Sidebar from "./sidebar";
import Header from "../../../component/herader";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Access() {


  return (
    <>
   
  
    <div className="flex h-screen flex-col bg-gray-900">
      <Header />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
              
     <BrowserRouter>
      <Routes>
        {/* Management routes with header and sidebar */}
          <Route path="/management" element={<Access />} />
          <Route path="/management/sales" element={<Sales />} />
          <Route path="/management/item" element={<Item />} />
          <Route path="/management/inventory" element={<Inventory />} />
          <Route path="/access" element={<Access />} />
      </Routes>
    </BrowserRouter>
      </div>
    </div>
  

    </>
  )
}