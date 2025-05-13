import Cart from "./components/Cart";

import ProductListing from "./components/ProductListing";

import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/protectedRoute";
import Login from "./components/Login";
const CheckOut = React.lazy(() => import("./components/CheckOut"));

const App = () => {
  //
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Shopping Cart App</h1>
        </header>
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/products"
              element={
               
                 
                  <ProtectedRoute>
                    <>
                       <ProductListing />
                     
                  <Cart></Cart>
                    </>
                  </ProtectedRoute>
                 
               
              }
            />

            <Route
              path="/checkout"
              element={
                <Suspense fallback={<h2>loading....</h2>}>
                  <CheckOut />
                </Suspense>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};
export default App;
