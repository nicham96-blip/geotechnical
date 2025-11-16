import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Table, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const tableData = [
  { property: "Liquid Limit (%)", "BC-01": 65, "RS-02": 42, "SS-03": "N/A" },
  { property: "Plastic Limit (%)", "BC-01": 27, "RS-02": 18, "SS-03": "N/A" },
  { property: "Plasticity Index", "BC-01": 38, "RS-02": 24, "SS-03": "N/A" },
  { property: "Specific Gravity", "BC-01": 2.65, "RS-02": 2.68, "SS-03": 2.71 },
  { property: "Moisture Content (%)", "BC-01": 18.5, "RS-02": 12.3, "SS-03": 8.2 }
];

const chartData = [
  { property: "Liquid Limit", "BC-01": 65, "RS-02": 42, "SS-03": 0 },
  { property: "Plastic Limit", "BC-01": 27, "RS-02": 18, "SS-03": 0 },
  { property: "Plasticity Index", "BC-01": 38, "RS-02": 24, "SS-03": 0 },
  { property: "Specific Gravity", "BC-01": 2.65, "RS-02": 2.68, "SS-03": 2.71 },
  { property: "Moisture Content", "BC-01": 18.5, "RS-02": 12.3, "SS-03": 8.2 }
];

export default function Analysis() {
  const [viewMode, setViewMode] = useState<"table" | "chart">("table");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Combined Analysis & Comparison
          </h1>
          <p className="text-lg text-muted-foreground">
            Comparative analysis of soil properties across all samples
          </p>
        </div>

        {/* View Toggle Buttons */}
        <div className="mb-6 flex gap-4">
          <Button
            variant={viewMode === "table" ? "default" : "outline"}
            onClick={() => setViewMode("table")}
            className={viewMode === "table" ? "bg-teal hover:bg-teal-light text-white" : ""}
          >
            Table View
          </Button>
          <Button
            variant={viewMode === "chart" ? "default" : "outline"}
            onClick={() => setViewMode("chart")}
            className={viewMode === "chart" ? "bg-teal hover:bg-teal-light text-white" : ""}
          >
            Chart View
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Soil Properties Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            {viewMode === "table" ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Property</th>
                      <th className="text-left p-3 font-semibold">BC-01 (Black Cotton)</th>
                      <th className="text-left p-3 font-semibold">RS-02 (Red Laterite)</th>
                      <th className="text-left p-3 font-semibold">SS-03 (Sandy)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="p-3 font-mono text-sm">{row.property}</td>
                        <td className="p-3 font-mono">{row["BC-01"]}</td>
                        <td className="p-3 font-mono">{row["RS-02"]}</td>
                        <td className="p-3 font-mono">{row["SS-03"]}</td>
                      </tr>
                    ))}
                    <tr className="border-b">
                      <td className="p-3 font-mono text-sm">USCS Classification</td>
                      <td className="p-3">
                        <Badge className="bg-clay-red text-white">CH</Badge>
                      </td>
                      <td className="p-3">
                        <Badge className="bg-clay-red-light text-white">SC</Badge>
                      </td>
                      <td className="p-3">
                        <Badge className="bg-sand-beige text-sand-beige-foreground">SP</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="w-full h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="property" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="BC-01" fill="#8B4513" name="BC-01 (Black Cotton)" />
                    <Bar dataKey="RS-02" fill="#CD5C5C" name="RS-02 (Red Laterite)" />
                    <Bar dataKey="SS-03" fill="#D2B48C" name="SS-03 (Sandy)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
