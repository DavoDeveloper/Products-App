import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const [details, setdetails] = useState(false);

  const btnBgClassName = details ? "bg-yellow-400" : "bg-blue-400";
  const btnClasses = ["py-2 px-4 border", btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img className="w-1/6" src={product.image} alt={product.title} />
      {product.title}
      <p className="font-bold">{product.price}</p>

      <button onClick={() => setdetails((prev) => !prev)} className={btnClasses.join(" ")}>
        {!details ? "Show details" : "Hide details"}
      </button>

      {details && <p>{product.description}</p>}
    </div>
  );
};
