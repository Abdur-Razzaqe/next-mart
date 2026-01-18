export default function ProductDetailsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-10 animate-pulse">
      {/* Back Button Skeleton */}
      <div className="h-8 w-40 bg-base-300 rounded mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Skeleton */}
        <div className="bg-base-300 rounded-xl h-96 w-full"></div>

        {/* Details Skeleton */}
        <div className="space-y-4">
          {/* Title */}
          <div className="h-8 w-3/4 bg-base-300 rounded"></div>

          {/* Price */}
          <div className="h-6 w-32 bg-base-300 rounded"></div>

          {/* Rating */}
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-5 w-5 bg-base-300 rounded"></div>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-base-300 rounded"></div>
            <div className="h-4 w-full bg-base-300 rounded"></div>
            <div className="h-4 w-5/6 bg-base-300 rounded"></div>
            <div className="h-4 w-4/6 bg-base-300 rounded"></div>
          </div>

          {/* Reviews */}
          <div className="space-y-2 mt-4">
            <div className="h-6 w-40 bg-base-300 rounded"></div>
            <div className="h-12 w-full bg-base-300 rounded"></div>
            <div className="h-12 w-full bg-base-300 rounded"></div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <div className="h-10 w-32 bg-base-300 rounded"></div>
            <div className="h-10 w-32 bg-base-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
