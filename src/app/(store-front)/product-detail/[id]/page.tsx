import ProductCard from "@/app/components/product-card/product-card";
import Image from "next/image";

interface ProductDetailProps {
    params : {
        id: string | number;
    }
}

async function getProductDetail(id: string | number) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch FakeApi product data')
    }
   
    return res.json()
  }

  async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products')
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch FakeApi product data')
    }
   
    return res.json()
  }

export default async function ProductDetail({ params }: ProductDetailProps) {
    const productDetail = await getProductDetail(params.id);
    const products = await getProducts();

    return (
        <main className="px-[24px] py-[32px]">
            <div className="flex flex-row items-center px-[100px]">
                <div className="relative h-[440px] w-[400px] mr-[80px]">
                    <Image 
                        src={productDetail.image} 
                        alt='Product Image'
                        fill
                        priority={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{objectFit: "contain"}}
                    />
                </div>
                <div>
                    <p>My Product Detail ID: {productDetail.id}</p>
                    <p className="text-[24px] font-poppins_medium">{productDetail.title}</p>
                    <p className="text-[18px] text-black/[0.60] mt-[10px]">{productDetail.description}</p>
                    <p className="text-[16px] text-black/[0.60] mt-[10px]">Category: <span className="text-black/[0.87] font-poppins_medium">{productDetail.category}</span></p>
                    <p className="text-[16px] text-black/[0.60] mt-[10px]">Price: <span className="text-black/[0.87] font-poppins_medium">${productDetail.price}</span></p>
                    <p className="text-[16px] text-black/[0.60] mt-[10px]">Rating: <span className="text-black/[0.87] font-poppins_medium">{productDetail?.rating?.rate} ({productDetail?.rating?.count} reviews)</span></p>
                    <button className="btn btn-primary mt-[32px]">
                        <span className="material-symbols-outlined">
                            add
                        </span>
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className="mt-[24px]">
                <p className="text-[20px] font-poppins_bold text-black/[0.87] mb-[24px]">Similiar Products</p>
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
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}
