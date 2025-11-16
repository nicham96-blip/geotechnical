import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import blackCottonSoil from "@/assets/soil-black-cotton.jpg";
import redSoil from "@/assets/soil-red.jpg";
import sandySoil from "@/assets/soil-sandy.jpg";

const galleryItems = [
  {
    id: 1,
    title: "Black Cotton Soil Sample",
    category: "Soil Samples",
    image: blackCottonSoil,
  },
  {
    id: 2,
    title: "Red Laterite Collection",
    category: "Soil Samples",
    image: redSoil,
  },
  {
    id: 3,
    title: "Sandy Soil Analysis",
    category: "Soil Samples",
    image: sandySoil,
  },
  {
    id: 4,
    title: "Sieve Analysis Setup",
    category: "Equipment",
    image: blackCottonSoil,
  },
  {
    id: 5,
    title: "Atterberg Limits Testing",
    category: "Testing",
    image: redSoil,
  },
  {
    id: 6,
    title: "Proctor Compaction",
    category: "Testing",
    image: sandySoil,
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Laboratory Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Visual documentation of soil samples, testing procedures, and laboratory equipment
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, idx) => (
            <Card 
              key={item.id}
              className="break-inside-avoid overflow-hidden hover-lift cursor-pointer animate-fade-in"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="relative group">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <Badge className="mb-2 bg-teal text-white">
                      {item.category}
                    </Badge>
                    <h3 className="text-white font-heading font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
