import React, { useEffect, useState } from "react";
import { fetchProducts } from "../Api/fetchProducts";

const Home = () => {
const [products, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const date = await fetchProducts();
      console.log(date);
      setProduct(date);
    };
    getProduct()
  },[]);

  return (
    <div className="p-4">
      {products ? (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto gap-4 lg:grid-cols-4 mt-4">
          {products.map((product) => (
            <li key={product.id}>
              <main className="">
                <div className="">
                  <article className="bg-white shadow rounded overflow-hidden flex flex-col">
                    <div className="h-52">
                      <img
                        className="h-full w-full  object-contain object-center mx-auto"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <div class="p-5 space-y-3 flex-1">
                      <h3 class="text-sm font-semibold text-sky-500">
                        {product.title}
                      </h3>
                      <h2 class="text-xl font-semibold text-slate-800 leading-tight">
                        {product.category}
                      </h2>
                      {/* <p class="text-slate-500 hidden md:block">
                        {product.description}
                      </p> */}
                    </div>

                    <div class="flex p-5 space-x-2">
                      <img
                        class="w-10 h-10 rounded-full"
                        src={product.image}
                        alt=""
                      />
                      <div class="flex flex-col justify-center">
                        <span class="text-sm font-semibold text-slate-600 leading-4">
                          {product.title}
                        </span>
                        <span class="text-sm text-slate-500">
                          $ {product.price}
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              </main>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};
export default Home;
