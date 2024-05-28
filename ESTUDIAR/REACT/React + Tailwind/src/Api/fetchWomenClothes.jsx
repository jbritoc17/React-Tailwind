export async function fetchWomenClothes (){
    try {
        const complet = "women's clothing"
        const res = await fetch(`https://fakestoreapi.com/products/category/${complet}`)
        const result = await res.json()

        return result
    } catch (error) {
        console.log(error);
    }
}