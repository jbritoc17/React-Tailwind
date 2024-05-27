export async function fetchElectronics() {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return result;
  } catch (error) {
    console.log(error);
  }
}
