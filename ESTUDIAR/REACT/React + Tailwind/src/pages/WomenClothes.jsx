import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWomenClothes } from "../Api/fetchWomenClothes";

const WomenClothes = ()=>{
const {categoryName} = useParams();
const [womenClothes, setWomenClothes] = useState([])

useEffect(()=>{
    const fetchData = async()=>{
        const data = await fetchWomenClothes();
        setWomenClothes(data)
    }
    fetchData()
},[])

return(
   <div className="mb-28">
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto gap-4 lg:grid-cols-4 mt-4 ">
      {womenClothes.map((item, index) => (
          <li key={item.id} className=" ">
            <article className="bg-white shadow rounded overflow-hidden flex flex-col ">
              <div className="h-52 mt-5">
                <img
                  className="h-full w-full  object-contain object-center mx-auto "
                  src={item.image}
                  alt=""
                />
              </div>
              <div class="p-5 space-y-3 flex-1 ">
                <h2>{item.category}</h2>
                <h3 class="text-sm font-semibold text-sky-500">{item.title}</h3>
                <h2 class="text-xl font-semibold text-slate-800 leading-tight">
                  $ {item.price}
                </h2>
                <p className="text-[12px] ">{item.description}</p>
              </div>
            </article>
          </li>
      )
    )}
    </ul>
    </div>
)

}

export default WomenClothes