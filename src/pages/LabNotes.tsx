import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

const mistakes = [
  {
    date: "Week 2",
    mistake: "Incorrect moisture tin weight recording",
    cause: "Used tare weight instead of empty container weight",
    correction: "Repeated moisture content test with proper calibration",
    learning: "Always verify container weights before testing and maintain proper lab notebook"
  },
  {
    date: "Week 3",
    mistake: "Sieve analysis incomplete shake time",
    cause: "Stopped mechanical sieving before full 10 minutes",
    correction: "Re-ran sieve analysis with timer for complete duration",
    learning: "Follow IS code specifications strictly; incomplete sieving leads to incorrect grain size distribution"
  },
  {
    date: "Week 4",
    mistake: "Casagrande apparatus calibration error",
    cause: "Cup drop height was incorrect (>1cm deviation)",
    correction: "Recalibrated apparatus and repeated liquid limit test",
    learning: "Equipment calibration is critical for Atterberg limits; verify before each test series"
  }
];

export default function LabNotes() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Lab Mistakes & Learning
          </h1>
          <p className="text-lg text-muted-foreground">
            Documenting errors, corrections, and key lessons learned during laboratory work
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          {mistakes.map((item, idx) => (
            <Card 
              key={idx}
              className="animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-destructive/10">
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-mono text-muted-foreground">{item.date}</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-sm text-destructive mb-1">Mistake</h3>
                        <p className="text-foreground">{item.mistake}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-sm text-muted-foreground mb-1">Root Cause</h3>
                        <p className="text-sm text-muted-foreground">{item.cause}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-sm text-teal mb-1">Correction Taken</h3>
                        <p className="text-sm">{item.correction}</p>
                      </div>
                      
                      <div className="pt-2 border-t">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-teal mt-0.5" />
                          <div>
                            <h3 className="font-semibold text-sm mb-1">Key Learning</h3>
                            <p className="text-sm text-foreground">{item.learning}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
