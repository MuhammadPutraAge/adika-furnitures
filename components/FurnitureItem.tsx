import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";

interface Props {
  slug: string;
  name: string;
  image: string;
  category: string;
  price: number;
}

const FurnitureItem = (furniture: Props) => (
  <Link
    key={furniture.slug}
    href={`/furnitures/${furniture.slug}`}
    className="block w-full"
  >
    <div className="w-full aspect-square rounded-xl bg-surface p-8 mb-4">
      <Image
        src={furniture.image}
        alt={furniture.name}
        width={520}
        height={520}
        className="w-full aspect-square"
      />
    </div>

    <h4 className="text-2xl font-bold mb-2">{furniture.name}</h4>
    <div className="flex items-center gap-4">
      <Badge title={furniture.category} />
      <p className="text-dark-muted/80 text-lg font-semibold">{`$${furniture.price}`}</p>
    </div>
  </Link>
);

export default FurnitureItem;
