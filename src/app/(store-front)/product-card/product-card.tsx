import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

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
        <a href="#">
            <div className="bg-white rounded-[8px] shadow p-[4px] hover:shadow-lg transition duration-300 cursor-pointer" id={props.id}>
            <Image 
                src={props.image} 
                alt={props.title} 
                width={142}
                height={124}
                priority={true}
            />
            <p className="text-[16px] font-poppins_medium">{props.title}</p>
            <p className="text-black/[0.60]">{props.description}</p>
            <p className="text-black/[0.60]">Category: <span className="text-black/[0.87] font-poppins_medium">{props.category}</span></p>
            <p className="text-black/[0.60]">Price: <span className="text-black/[0.87] font-poppins_medium">${props.price}</span></p>
            <p className="text-black/[0.60]">Rating: <span className="text-black/[0.87] font-poppins_medium">{props?.rating?.rate} ({props?.rating?.count} reviews)</span></p>
      </div>
        </a>
    );
}
