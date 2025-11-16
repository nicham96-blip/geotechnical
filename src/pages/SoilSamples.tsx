import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blackCottonSoil from "@/assets/soil-black-cotton.jpg";
import redSoil from "@/assets/soil-red.jpg";
import sandySoil from "@/assets/soil-sandy.jpg";
import { MapPin, Droplets, Layers } from "lucide-react";

const samples = [
  {
    id: "BC-01",
    name: "Black Cotton Soil",
    type: "High Plasticity Clay",
    location: "Belgaum District, Karnataka",
    coordinates: "15.8497° N, 74.4977° E",
    image: blackCottonSoil,
    moisture: "Medium",
    texture: "Fine-grained, sticky when wet",
    color: "Dark grey to black",
    classification: "CH (High Plasticity Clay)",
    tests: ["Atterberg Limits", "Specific Gravity", "Sieve Analysis", "Proctor Test"]
  },
  {
    id: "RS-02",
    name: "Red Laterite Soil",
    type: "Clayey Sand",
    location: "Mangalore Coastal Region",
    coordinates: "12.9141° N, 74.8560° E",
    image: redSoil,
    moisture: "Low to Medium",
    texture: "Mixed grain size with clay content",
    color: "Reddish-brown",
    classification: "SC (Clayey Sand)",
    tests: ["Atterberg Limits", "Specific Gravity", "Sieve Analysis", "Hydrometer"]
  },
  {
    id: "SS-03",
    name: "Sandy Soil",
    type: "Poorly Graded Sand",
    location: "Coastal Karnataka (Udupi)",
    coordinates: "13.3409° N, 74.7421° E",
    image: sandySoil,
    moisture: "Low",
    texture: "Coarse-grained, non-plastic",
    color: "Light tan to beige",
    classification: "SP (Poorly Graded Sand)",
    tests: ["Specific Gravity", "Sieve Analysis", "Relative Density", "Permeability"]
  }
];

export default function SoilSamples() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Soil Sample Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Detailed documentation of three distinct soil samples collected from various locations 
            across Karnataka, representing diverse geotechnical characteristics and properties.
          </p>
        </div>

        {/* Samples Grid */}
        <div className="space-y-8">
          {samples.map((sample, idx) => (
            <Card 
              key={sample.id}
              className="overflow-hidden hover-lift animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="grid md:grid-cols-5 gap-6">
                {/* Image Section */}
                <div className="md:col-span-2 relative">
                  <img 
                    src={sample.image}
                    alt={sample.name}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground font-mono text-sm">
                      {sample.id}
                    </Badge>
                  </div>
                </div>

                {/* Details Section */}
                <CardContent className="md:col-span-3 p-6">
                  <h2 className="text-2xl font-heading font-bold mb-2">{sample.name}</h2>
                  <p className="text-lg text-muted-foreground mb-4">{sample.type}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-teal mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Location</div>
                        <div className="text-sm text-muted-foreground">{sample.location}</div>
                        <div className="text-xs text-muted-foreground font-mono">{sample.coordinates}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Droplets className="h-5 w-5 text-teal mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Moisture Content</div>
                        <div className="text-sm text-muted-foreground">{sample.moisture}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Layers className="h-5 w-5 text-teal mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Visual Texture</div>
                        <div className="text-sm text-muted-foreground">{sample.texture}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-br from-clay-red to-sand-beige mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Color</div>
                        <div className="text-sm text-muted-foreground">{sample.color}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-semibold mb-2">USCS Classification</div>
                    <Badge variant="outline" className="text-clay-red border-clay-red">
                      {sample.classification}
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-semibold mb-2">Tests Conducted</div>
                    <div className="flex flex-wrap gap-2">
                      {sample.tests.map((test) => (
                        <Badge key={test} variant="secondary" className="text-xs">
                          {test}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link to="/tests">
                    <Button className="bg-teal hover:bg-teal-light text-white w-full">
                      View Test Results
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
