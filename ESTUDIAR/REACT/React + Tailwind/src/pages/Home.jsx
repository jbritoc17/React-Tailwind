import React, { useEffect, useState } from "react";
import { fetchProducts } from "../Api/fetchProducts";
import categories from "../data/categories";

import { Link } from "react-router-dom";
const Home = () => {
  const [products, setProduct] = useState([]);
  const [categoriesFromAPI, setCategoriesFromAPI] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const date = await fetchProducts();
      const data = await fetchProducts();
      console.log(date);
      setProduct(date[0]);
      setCategoriesFromAPI(data[1]);
    };
    getProduct();
  }, []);

  return (
    <div className="">
      <div className="mb-20 ">
        {products.length ? (
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto gap-4 lg:grid-cols-4 mt-4 h-full object-contain ">
            {categories.map((category, index) => (
              <li key={index} className="flex justify-center items-center ">
                <div className="hover:scale-105 duration-1000 group relative  overflow-hidden rounded-lg">
                  <Link
                    to={`/category/${category.name}`}
                    className="   "
                  >
                  <div className="">

                    <img
                      className=" rounded-lg h-[350px] w-[350px] object-cover group-hover:opacity-40 duration-500  "
                      src={category.img}
                      alt=""
                      />
                    <p className="absolute group-hover:bg-[#070707bd]  opacity-0 bottom-[140px] left-0 w-full text-center p-2 uppercase grop-hover:bg-opacity-70  transform transition  ease-in-out  group-hover:opacity-100 duration-300  text-[#d83aff] text-xl " >
                      {category.name}
                    </p>
                      </div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <div>
              <ion-icon
                class="text-9xl animate-spin  text-sky-500"
                name="reload-outline"
              ></ion-icon>
            </div>

            <p className="text-7xl">Loading</p>
          </div>
        )}
      </div>
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
                        {product.category}
                      </h3>
                      <h2 class="text-xl font-semibold text-slate-800 leading-tight">
                        {product.category}
                      </h2>
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
        <div className="mt-72 border-spacing-8 border-l-yellow-700">
          <div className="">
            <ion-icon
              class=" text-9xl animate-spin  text-sky-500"
              name="reload-outline"
            ></ion-icon>
          </div>

          <p className="text-7xl">Loading</p>
        </div>
      )}
    </div>
  );
};
export default Home;
