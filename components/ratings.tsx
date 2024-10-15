import { Star } from "lucide-react";

export default function Ratings({
  rating,
  count,
}: {
  rating: number;
  count: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {[...Array(5)].map((_, star) => (
          <Star
            key={star}
            className={`h-6 w-6 ${
              rating >= star
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
