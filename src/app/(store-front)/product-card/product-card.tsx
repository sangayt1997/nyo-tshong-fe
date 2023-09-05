import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    id: string;
    title: string;
    image: string | StaticImport;
    description?: string;
    price?: string | number;
    category?: string;
    rating?: { rate?: number, count?: number }
}

export default function ProductCard (props : ProductCardProps) {
    return (
        <Link href="/">
            <div className="bg-white rounded-[8px] shadow p-[16px] transition-transform transform hover:scale-105 hover:shadow-md transition duration-300 cursor-pointer" id={props.id}>
                <div className="flex justify-center items-center">
                    <div className="relative h-[246px] w-[210px]">
                        <Image 
                            src={props.image} 
                            alt={props.title} 
                            layout="fill" // required
                            objectFit="contain" // change as you like
                            priority={true}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>
                <p className="text-[16px] font-poppins_medium mt-[16px] truncate">{props.title}</p>
                <p className="text-black/[0.60] card-description-truncate mt-[10px]">{props.description}</p>
                <p className="text-black/[0.60] mt-[10px]">Category: <span className="text-black/[0.87] font-poppins_medium">{props.category}</span></p>
                <p className="text-black/[0.60] mt-[10px]">Price: <span className="text-black/[0.87] font-poppins_medium">${props.price}</span></p>
                <p className="text-black/[0.60] mt-[10px]">Rating: <span className="text-black/[0.87] font-poppins_medium">{props?.rating?.rate} ({props?.rating?.count} reviews)</span></p>
            </div>
        </Link>
    );
}
