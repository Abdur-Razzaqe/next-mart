// app/items/[id]/page.jsx
import products from "@/app/data/products.json";
import Image from "next/image";
import Link from "next/link";

export default async function ItemDetailsPage({ params }) {
  // If params is Promise, await it
  const { id } = await params; // ✅ unwrap params

  // Find product
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div className="p-10">Product not found</div>;

  const fullStars = Math.floor(product.rating);

  return (
    <div className="container mx-auto px-4 py-10">
      <Link href="/products" className="btn btn-ghost mb-6">
        ← Back
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={400}
          className="w-full h-96 object-cover rounded-lg"
        />

        <div>
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-2xl font-semibold text-green-600 mb-4">
            ${product.price}
          </p>

          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < fullStars ? "⭐" : "☆"}</span>
            ))}
            <span className="ml-2 text-sm text-gray-500">
              ({product.rating})
            </span>
          </div>
          <h3 className="font-semibold mb-2">Description</h3>
          <p className="text-gray-600 mb-6 whitespace-pre-line">
            {product.description}
          </p>

          <h3 className="font-semibold mb-2">Reviews</h3>
          <ul className="space-y-2">
            {product.reviews.map((r, i) => (
              <li key={i} className="bg-base-200 p-3 rounded">
                {r}
              </li>
            ))}
          </ul>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary btn-outline w-full ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
