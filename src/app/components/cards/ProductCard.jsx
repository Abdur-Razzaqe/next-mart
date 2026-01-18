import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  const fullStars = Math.floor(product.rating);

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
      {/* Image */}
      <figure>
        <Image
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover"
          width={300}
          height={220}
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        {/* Name */}
        <h2 className="card-title">{product.name}</h2>

        {/* Price & Rating (Side by Side) */}
        <div className="flex items-center justify-between">
          {/* Price */}
          <p className="text-lg font-semibold text-green-600">
            ${product.price}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <span key={index}>{index < fullStars ? "⭐" : "☆"}</span>
            ))}
            <span className="ml-1 text-sm text-gray-500">
              ({product.rating})
            </span>
          </div>
        </div>

        {/* Button (Full Width) */}
        <div className="mt-4">
          <Link href={`/products/${product.id}`}>
            <button className="btn btn-primary btn-sm w-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
