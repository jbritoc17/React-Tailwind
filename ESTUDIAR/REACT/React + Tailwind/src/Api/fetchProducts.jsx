export async function fetchProducts() {
  try {
    const resp = await fetch("https://fakestoreapi.com/products");

    const resul = await resp.json();

    return resul;
  } catch (error) {
    console.log(error);
  }
}
