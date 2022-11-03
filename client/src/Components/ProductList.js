import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_product } from "../redux/Action/ProductAction";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_product());
  }, [dispatch]);

  const product = useSelector((state) => state.productreducer.products);
  console.log(product);
  return (
    <div>
      {product.map((prod) => (
        <ProductCard prod={prod} key={prod._id} />
      ))}
    </div>
  );
};

export default ProductList;
