import ProductCard from "../components/product-card/product-card";

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
        <main className="px-[24px] py-[32px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                {products.map((item: any, index: number) => (
                    <ProductCard
                        key={index}
                        id={item?.id}
                        image={item?.image}
                        title={item?.title}
                        description={item?.description}
                        category={item.category}
                        price={item?.price}
                        rating={item.rating}
                        href={`/product-detail/${item.id}`}
                        as={`/product-detail/${item.id}?referrer=${item?.title}`}
                    />
                ))}
            </div>
        </main>
    )
}
