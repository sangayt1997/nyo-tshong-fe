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
        <div id={props.id}>
            <Image 
                src={props.image} 
                alt={props.title} 
                width={142}
                height={124}
                priority={true}
            />
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <p>Category: {props.category}</p>
            <p>Price: ${props.price}</p>
            <p>Rating: {props?.rating?.rate} ({props?.rating?.count} reviews)</p>
      </div>
    );
}