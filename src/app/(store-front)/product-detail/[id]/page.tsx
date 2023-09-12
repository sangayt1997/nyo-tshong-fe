async function getProductDetail() {
    const res = await fetch('https://fakestoreapi.com/products/1')
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch FakeApi product data')
    }
   
    return res.json()
  }

export default async function ProductDetail() {
    const productDetail = await getProductDetail();

    return (
        <main className="h-screen px-[24px] py-[32px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                <p>Product details</p>
            </div>
        </main>
    )
}
