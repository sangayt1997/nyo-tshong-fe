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
            <p className="font-poppins_medium">FakeStore API</p>
            <button className="btn btn-primary">Hello daisyUI</button>
            <h1 className="text-3xl underline">Hello, Next.js!</h1>
            <Image
                src="https://res.cloudinary.com/dsim60jne/image/upload/v1684229456/personal%20website%20asset/stellar_minds_banner_msbzlw.png"
                width={500}
                height={600}
                alt="picture"
                style={{width: 'auto', height: 'auto'}}
                priority={true}
            />
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
