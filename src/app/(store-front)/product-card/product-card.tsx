import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ProductCardProps {
    id: string;
    title: string;
    image: string | StaticImport;
    description?: string;
    price?: string | number;
    rate?: string | number,
    count?: string | number 
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
            <p>Price: ${props.price}</p>
            <p>Rating: {props?.rate} ({props?.count} reviews)</p>
      </div>
    );
}