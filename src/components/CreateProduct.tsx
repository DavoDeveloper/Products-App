import React, { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

const ProductData: IProduct = {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    setError("");
    e.preventDefault();

    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }
    ProductData.title = value;
    const response = await axios.post<IProduct>("https://fakestoreapi.com/products", ProductData);
    onCreate(response.data);
  };
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 outline-0 w-full"
        placeholder="Enter product title..."
        value={value}
        onChange={inputHandler}
      />
      {error && <ErrorMessage error={error} />}
      <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white ">
        Create
      </button>
    </form>
  );
};
