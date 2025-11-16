import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Name A",
    roll: "01",
    usn: "USN 1",
    role: "Team Lead & Data Analysis",
    responsibilities: "Coordinated testing procedures, data compilation, and statistical analysis",
    email: "student1@university.edu"
  },
  {
    name: "Name B",
    roll: "02",
    usn: "USN 2",
    role: "Laboratory Testing Specialist",
    responsibilities: "Conducted Atterberg limits, specific gravity, and moisture content tests",
    email: "student2@university.edu"
  },
  {
    name: "Name C",
    roll: "03",
    usn: "USN 3",
    role: "Documentation & Reporting",
    responsibilities: "Maintained test logs, prepared reports, and quality control verification",
    email: "student3@university.edu"
  },
  {
    name: "Name D",
    roll: "04",
    usn: "USN 4",
    role: "Field Sampling Coordinator",
    responsibilities: "Organized soil collection, sample preparation, and initial classification",
    email: "student4@university.edu"
  },
  {
    name: "Name E",
    roll: "05",
    usn: "USN 5",
    role: "Data Analysis & Quality Control",
    responsibilities: "Performed data validation, statistical analysis, and quality assurance checks",
    email: "student5@university.edu"
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Our Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the team of engineering students behind this comprehensive geotechnical laboratory study
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {teamMembers.map((member, idx) => (
            <Card 
              key={member.name}
              className="hover-lift animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal to-clay-red flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{member.name}</h3>
                  <div className="flex gap-4 mb-3 text-sm text-muted-foreground">
                    <span className="font-mono">Roll: {member.roll}</span>
                    <span className="font-mono">{member.usn}</span>
                  </div>
                  <p className="text-sm text-teal font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.responsibilities}
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-teal transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-teal transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-teal transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Acknowledgements */}
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h2 className="text-2xl font-heading font-bold mb-4">Acknowledgements</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We would like to express our sincere gratitude to our faculty advisor, 
                <strong className="text-foreground"> Dr. [Name]</strong>, for their invaluable 
                guidance and support throughout this laboratory study.
              </p>
              <p>
                Special thanks to the <strong className="text-foreground">Department of Civil Engineering</strong> and 
                the <strong className="text-foreground">Geotechnical Engineering Laboratory</strong> for 
                providing access to equipment and facilities necessary for conducting these tests.
              </p>
              <p>
                This project was completed as part of the 
                <strong className="text-foreground"> Geotechnical Engineering Laboratory</strong> course 
                at <strong className="text-foreground">[University Name]</strong>, [Semester/Year].
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
