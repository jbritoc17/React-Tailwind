export async function fetchJewelery() {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    const resul = await res.json();

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return resul;
  } catch (error) {
    throw new Error("Error fetching jewelry data");
  }
}

