export async function fetchProducts() {
  try {
    const resp = await fetch("https://fakestoreapi.com/products");
    const resCategory = await fetch("https://fakestoreapi.com/products/categories")
    const resul = await resp.json();
    const resultCategory = await resCategory.json()

    return [resul, resultCategory];
  } catch (error) {
    console.log(error);
  }
}
