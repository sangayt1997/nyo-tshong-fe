import Image from "next/image";
import ProductCard from "./product-card/product-card";

async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products')
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch FakeApi product data')
    }
   
    return res.json()
  }

export default async function Home() {
    const products = await getProducts();

    return (
        <main>
            <div className="product-list">
                {products.map((item : any, index: number) => (
                    <ProductCard 
                        key={index} 
                        id={item?.id}
                        image={item?.image} 
                        title={item?.title} 
                        description={item?.description} 
                        price={item?.price}
                        rate={item?.rating?.rate}
                        count={item?.rating?.count}
                    />
                ))}
            </div>
        </main>
    )
}
