import { ProductCard } from "@/component/i-tect-cards/product-card";

const BASE_URL = process.env.NEXT_PUBLIC_API

// async function loadProduct() {
//   const response = await fetch(`${BASE_URL}/api/v1/products/`, {
//     method: "GET",
//   })

//   const products=await response.json()
//   return products;
// }



export default async function ProductPage() {

     const response = await fetch(`${BASE_URL}/api/v1/products/`, {
    method: "GET",
  })

    // const products=await loadProduct();
    const products=await response.json();


  return (
    <main className="container mx-auto">

         <section className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
            {
                products.map((product, index)=>   <ProductCard
                key={index}
            images={[product.images[0]]}
            title={product.title}
            description={product.description}
            price={product.price}
            />)
            }


            {/* <ProductCard
            images={ "https://i.imgur.com/KeqG6r4.jpeg"}
            title={"HALZANMINI3YSW"}
            description={"NEW HERMES BAGS HALZAN MINI 3Y SHOULDER BAG/CROSSBODY BAG"}
            price={200}/> */}
        </section>
    </main>
  )
}

// 1




