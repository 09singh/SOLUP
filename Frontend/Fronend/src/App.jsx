import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/herader";
import Body from "./component/body";
import Login from "./component/login";
import Signup from "./component/signup";
import Service from "./component/service";

function App() {
  const handleLogin = (formData) => {
    
};
  return (
    <BrowserRouter>
      <div className="flex h-screen flex-col bg-gray-900">
        <Header />
        <main className="min-h-0 flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/login" element={<Login data={handleLogin} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
