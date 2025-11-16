import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, FlaskConical, Beaker, Ruler, Droplets, BarChart3 } from "lucide-react";
import { useState } from "react";

const tests = [
  {
    id: "moisture-content",
    name: "Moisture Content",
    soil: "BC-01",
    icon: Droplets,
    result: "18.5%",
    status: "Complete",
    category: "Index Properties"
  },
  {
    id: "specific-gravity",
    name: "Specific Gravity",
    soil: "All Samples",
    icon: Beaker,
    result: "2.65 - 2.71",
    status: "Complete",
    category: "Index Properties"
  },
  {
    id: "sieve-analysis",
    name: "Sieve Analysis",
    soil: "SS-03",
    icon: Ruler,
    result: "D50 = 0.42mm",
    status: "Complete",
    category: "Grain Size"
  },
  {
    id: "atterberg-limits",
    name: "Atterberg Limits",
    soil: "BC-01",
    icon: FlaskConical,
    result: "LL=65%, PI=38%",
    status: "Complete",
    category: "Index Properties"
  },
  {
    id: "proctor-test",
    name: "Proctor Compaction",
    soil: "RS-02",
    icon: BarChart3,
    result: "OMC=14.2%",
    status: "Complete",
    category: "Compaction"
  },
  {
    id: "hydrometer",
    name: "Hydrometer Analysis",
    soil: "RS-02",
    icon: Beaker,
    result: "50% Clay",
    status: "Complete",
    category: "Grain Size"
  },
];

export default function TestDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTests = tests.filter(test => 
    test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    test.soil.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Test Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive overview of all geotechnical tests conducted on soil samples
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search tests by name or soil sample..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">All Tests</Button>
            <Button variant="outline">Index Properties</Button>
            <Button variant="outline">Grain Size</Button>
          </div>
        </div>

        {/* Test Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test, idx) => (
            <Link key={test.id} to={`/tests/${test.id}`}>
              <Card 
                className="group hover-lift cursor-pointer animate-scale-in h-full"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-3 rounded-lg bg-teal/10">
                      <test.icon className="h-6 w-6 text-teal" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {test.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-teal transition-colors">
                    {test.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Sample ID</div>
                      <Badge className="bg-primary text-primary-foreground font-mono text-xs">
                        {test.soil}
                      </Badge>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Result</div>
                      <div className="text-lg font-mono font-semibold text-foreground">
                        {test.result}
                      </div>
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs">
                        {test.category}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredTests.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No tests found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
