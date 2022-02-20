import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./prodComponents";
import { useDispatch } from "react-redux";
import { setProducts } from "../actions/productAction";

import axios from "axios";
import { Loader } from "./utility/loader";
const ProductListing = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchProductsList = () => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(setProducts(response.data));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  
  useEffect(() => {
    fetchProductsList();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
