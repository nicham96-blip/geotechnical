import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download, FlaskConical, BarChart3, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import blackCottonSoil from "@/assets/soil-black-cotton.jpg";
import redSoil from "@/assets/soil-red.jpg";
import sandySoil from "@/assets/soil-sandy.jpg";

const soilSamples = [
  {
    id: "BC-01",
    name: "Black Cotton Soil",
    location: "Belgaum, Karnataka",
    image: blackCottonSoil,
    color: "clay-red",
    description: "High plasticity clay with significant swelling properties"
  },
  {
    id: "RS-02",
    name: "Red Laterite Soil",
    location: "Mangalore, Karnataka",
    image: redSoil,
    color: "clay-red-light",
    description: "Iron-rich soil with good drainage characteristics"
  },
  {
    id: "SS-03",
    name: "Sandy Soil",
    location: "Coastal Karnataka",
    image: sandySoil,
    color: "sand-beige",
    description: "Coarse-grained soil with low cohesion"
  }
];

const stats = [
  { label: "Soil Samples", value: "3", icon: FlaskConical },
  { label: "Tests Conducted", value: "6+", icon: BarChart3 },
  { label: "Data Points Collected", value: "50+", icon: FileText }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 36, 0.9), rgba(43, 106, 138, 0.8)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Geotechnical Engineering
              <span className="block text-teal-light mt-2">Laboratory Portfolio</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Comprehensive soil analysis and testing documentation from Karnataka region. 
              Advanced geotechnical characterization with professional-grade testing procedures.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/tests">
                <Button size="lg" className="bg-teal hover:bg-teal-light text-white group">
                  Open Dashboard
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Download className="mr-2 h-5 w-5" />
                Download Summary PDF
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl">
              {stats.map((stat, idx) => (
                <div 
                  key={stat.label}
                  className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <stat.icon className="h-6 w-6 text-teal-light mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated soil stack visual */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block animate-float">
          <div className="relative w-48 h-64">
            <div className="absolute inset-0 bg-gradient-to-b from-clay-red via-sand-beige to-teal opacity-30 rounded-2xl blur-xl"></div>
            <div className="relative space-y-4">
              <div className="h-16 bg-primary rounded-lg border-2 border-white/20 flex items-center justify-center text-white text-sm font-mono">
                Black Cotton
              </div>
              <div className="h-16 bg-clay-red rounded-lg border-2 border-white/20 flex items-center justify-center text-white text-sm font-mono">
                Red Laterite
              </div>
              <div className="h-16 bg-sand-beige rounded-lg border-2 border-white/20 flex items-center justify-center text-sand-beige-foreground text-sm font-mono">
                Sandy Soil
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soil Samples Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Soil Sample Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three distinct soil types collected from various locations across Karnataka, 
              representing diverse geotechnical characteristics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {soilSamples.map((soil, idx) => (
              <Card 
                key={soil.id}
                className="group hover-lift overflow-hidden border-card-border animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={soil.image}
                    alt={soil.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold bg-${soil.color} text-white`}>
                      {soil.id}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2">{soil.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{soil.location}</p>
                  <p className="text-sm text-foreground/80 mb-4">{soil.description}</p>
                  <Link to="/samples">
                    <Button variant="outline" size="sm" className="w-full group">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Test Dashboard", desc: "View all tests", link: "/tests", icon: FlaskConical },
              { title: "Analysis", desc: "Compare results", link: "/analysis", icon: BarChart3 },
              { title: "Gallery", desc: "Lab images", link: "/gallery", icon: FileText },
              { title: "Team", desc: "Meet the team", link: "/team", icon: FileText }
            ].map((item, idx) => (
              <Link key={item.title} to={item.link}>
                <Card className="hover-lift cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <item.icon className="h-8 w-8 mx-auto mb-3 text-teal" />
                    <h4 className="font-heading font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
