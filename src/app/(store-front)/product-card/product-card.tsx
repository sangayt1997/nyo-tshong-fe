interface ProductCardProps {
    id: string;
    title?: string;
    image?: string | undefined;
    description?: string;
    price?: string | number;
    rate?: string | number,
    count?: string | number 
}

export default function ProductCard (props : ProductCardProps) {
    return (
        <div id={props.id}>
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>Price: ${props.price}</p>
            <p>Rating: {props?.rate} ({props?.count} reviews)</p>
      </div>
    );
}