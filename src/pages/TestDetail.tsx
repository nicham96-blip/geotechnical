import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Latex from "react-latex-next";

// Test data - should match TestDashboard
const tests = [
  {
    id: "moisture-content",
    name: "Moisture Content",
    soil: "BC-01",
    result: "18.5%",
    status: "Complete",
    category: "Index Properties",
    theory: `Moisture content is a fundamental property of soil that represents the amount of water present in a soil sample. It is expressed as a percentage of the weight of water to the weight of dry soil. This property is crucial in geotechnical engineering as it affects soil behavior, compaction characteristics, and strength properties.

The moisture content test is performed by measuring the weight of a soil sample before and after drying it in an oven at 105-110°C until a constant weight is achieved. The difference between the wet and dry weights gives the weight of water, which is then used to calculate the moisture content percentage.

Moisture content influences several soil properties including:
- Atterberg limits (liquid limit, plastic limit)
- Compaction characteristics (optimum moisture content)
- Shear strength
- Permeability
- Swelling and shrinkage behavior`,
    calculations: `The moisture content (w) is calculated using the following formula:

$$w = \\frac{W_w}{W_s} \\times 100\\%$$

Where:
- $W_w$ = Weight of water in the soil sample
- $W_s$ = Weight of dry soil (oven-dried)

Alternatively, using wet and dry weights:

$$w = \\frac{W_{wet} - W_{dry}}{W_{dry}} \\times 100\\%$$

Where:
- $W_{wet}$ = Weight of wet soil sample
- $W_{dry}$ = Weight of oven-dried soil sample

For the test conducted on sample BC-01:
- Initial weight (wet): $W_{wet} = 150.2$ g
- Final weight (dry): $W_{dry} = 126.7$ g
- Weight of water: $W_w = 150.2 - 126.7 = 23.5$ g

Therefore:
$$w = \\frac{23.5}{126.7} \\times 100\\% = 18.5\\%$$`
  },
  {
    id: "specific-gravity",
    name: "Specific Gravity",
    soil: "All Samples",
    result: "2.65 - 2.71",
    status: "Complete",
    category: "Index Properties",
    theory: `Specific gravity of soil solids is defined as the ratio of the weight of a given volume of soil solids to the weight of an equal volume of distilled water at a specified temperature (typically 4°C or 20°C). It is a dimensionless quantity that indicates the density of soil particles relative to water.

Specific gravity is an important index property used in:
- Soil classification
- Calculation of void ratio and porosity
- Determination of degree of saturation
- Analysis of soil compaction
- Design of earthworks and foundations

The specific gravity of most soils ranges between 2.60 and 2.80. Soils with higher specific gravity typically contain heavier minerals, while organic soils may have lower values.`,
    calculations: `The specific gravity ($G_s$) is calculated using:

$$G_s = \\frac{W_s}{V_s \\times \\gamma_w}$$

Where:
- $W_s$ = Weight of soil solids
- $V_s$ = Volume of soil solids
- $\\gamma_w$ = Unit weight of water (typically 1 g/cm³ or 9.81 kN/m³)

Using the pycnometer method:

$$G_s = \\frac{W_2 - W_1}{(W_2 - W_1) - (W_3 - W_4)}$$

Where:
- $W_1$ = Weight of empty pycnometer
- $W_2$ = Weight of pycnometer + dry soil
- $W_3$ = Weight of pycnometer + soil + water
- $W_4$ = Weight of pycnometer + water only

For the tests conducted:
- Black Cotton Soil (BC-01): $G_s = 2.65$
- Red Laterite Soil (RS-02): $G_s = 2.68$
- Sandy Soil (SS-03): $G_s = 2.71$`
  },
  {
    id: "sieve-analysis",
    name: "Sieve Analysis",
    soil: "SS-03",
    result: "D50 = 0.42mm",
    status: "Complete",
    category: "Grain Size",
    theory: `Sieve analysis is a method used to determine the particle size distribution of a soil sample. It involves passing the soil through a series of sieves with progressively smaller openings and weighing the amount of soil retained on each sieve.

This test is essential for:
- Soil classification (USCS, AASHTO)
- Determining grain size distribution curves
- Calculating coefficients of uniformity and curvature
- Assessing soil behavior and engineering properties
- Design of filters and drainage systems

The results are typically presented as a grain size distribution curve, showing the percentage of soil passing through each sieve size. Key parameters derived include:
- D10: Diameter at which 10% of soil passes (effective size)
- D30: Diameter at which 30% of soil passes
- D50: Diameter at which 50% of soil passes (median size)
- D60: Diameter at which 60% of soil passes`,
    calculations: `The percentage passing each sieve is calculated as:

$$\\% \\text{ Passing} = \\frac{W_{passing}}{W_{total}} \\times 100\\%$$

Where:
- $W_{passing}$ = Cumulative weight of soil passing through the sieve
- $W_{total}$ = Total weight of soil sample

Coefficient of Uniformity ($C_u$):
$$C_u = \\frac{D_{60}}{D_{10}}$$

Coefficient of Curvature ($C_c$):
$$C_c = \\frac{(D_{30})^2}{D_{10} \\times D_{60}}$$

For sample SS-03:
- $D_{10} = 0.15$ mm
- $D_{30} = 0.28$ mm
- $D_{50} = 0.42$ mm
- $D_{60} = 0.55$ mm

Therefore:
$$C_u = \\frac{0.55}{0.15} = 3.67$$

$$C_c = \\frac{(0.28)^2}{0.15 \\times 0.55} = \\frac{0.0784}{0.0825} = 0.95$$`
  },
  {
    id: "atterberg-limits",
    name: "Atterberg Limits",
    soil: "BC-01",
    result: "LL=65%, PI=38%",
    status: "Complete",
    category: "Index Properties",
    theory: `Atterberg limits are water content values that define the boundaries between different states of consistency in fine-grained soils. These limits were developed by Albert Atterberg and are fundamental to soil classification and behavior prediction.

The three main Atterberg limits are:
1. **Liquid Limit (LL)**: The water content at which soil transitions from a liquid to a plastic state. At this limit, the soil has minimal shear strength.
2. **Plastic Limit (PL)**: The water content at which soil transitions from a plastic to a semi-solid state. Below this limit, the soil becomes brittle.
3. **Shrinkage Limit (SL)**: The water content below which further reduction in moisture does not cause volume reduction.

The Plasticity Index (PI) is calculated as the difference between the liquid limit and plastic limit. It indicates the range of water content over which the soil exhibits plastic behavior.`,
    calculations: `Plasticity Index ($PI$):

$$PI = LL - PL$$

Where:
- $LL$ = Liquid Limit (\%)
- $PL$ = Plastic Limit (\%)

Liquidity Index ($LI$):

$$LI = \\frac{w - PL}{PI}$$

Where:
- $w$ = Natural water content (\%)

For sample BC-01:
- Liquid Limit: $LL = 65\\%$
- Plastic Limit: $PL = 27\\%$
- Natural Moisture Content: $w = 18.5\\%$

Therefore:
$$PI = 65 - 27 = 38\\%$$

$$LI = \\frac{18.5 - 27}{38} = \\frac{-8.5}{38} = -0.22$$

A negative liquidity index indicates the soil is in a semi-solid state, below its plastic limit.`
  },
  {
    id: "proctor-test",
    name: "Proctor Compaction",
    soil: "RS-02",
    result: "OMC=14.2%",
    status: "Complete",
    category: "Compaction",
    theory: `The Proctor compaction test determines the optimum moisture content (OMC) and maximum dry density (MDD) of soil. This test is crucial for earthwork construction, as it helps determine the ideal moisture content for achieving maximum compaction.

The test involves compacting soil samples at different moisture contents using a standard compactive effort and measuring the resulting dry density. A compaction curve is plotted showing the relationship between moisture content and dry density, with the peak of the curve indicating the optimum conditions.

The Proctor test is essential for:
- Design of embankments and fills
- Road construction
- Foundation preparation
- Quality control during construction
- Determining compaction specifications`,
    calculations: `Dry density ($\\gamma_d$) is calculated as:

$$\\gamma_d = \\frac{\\gamma_{wet}}{1 + w}$$

Where:
- $\\gamma_{wet}$ = Wet density of compacted soil
- $w$ = Moisture content (as decimal)

Alternatively:

$$\\gamma_d = \\frac{W_{dry}}{V}$$

Where:
- $W_{dry}$ = Weight of dry soil
- $V$ = Volume of mold

Degree of Compaction:

$$\\text{Degree of Compaction} = \\frac{\\gamma_d}{\\gamma_{d,max}} \\times 100\\%$$

For sample RS-02:
- Maximum Dry Density: $\\gamma_{d,max} = 1.85$ g/cm³
- Optimum Moisture Content: $OMC = 14.2\\%$

At OMC:
$$\\gamma_{d,max} = \\frac{2.11}{1 + 0.142} = \\frac{2.11}{1.142} = 1.85 \\text{ g/cm³}$$`
  },
  {
    id: "hydrometer",
    name: "Hydrometer Analysis",
    soil: "RS-02",
    result: "50% Clay",
    status: "Complete",
    category: "Grain Size",
    theory: `Hydrometer analysis is used to determine the particle size distribution of fine-grained soils (silt and clay fractions) that cannot be analyzed using sieve analysis. The test is based on Stokes' law, which relates the settling velocity of particles in a fluid to their size.

The test involves:
1. Dispersing soil particles in water
2. Measuring the density of the suspension at various time intervals using a hydrometer
3. Calculating particle sizes based on settling velocities
4. Determining the percentage of different size fractions

Hydrometer analysis is essential for:
- Complete grain size distribution (combined with sieve analysis)
- Soil classification
- Understanding soil behavior
- Design of foundations and earthworks`,
    calculations: `Particle diameter ($D$) using Stokes' law:

$$D = \\sqrt{\\frac{18\\eta v}{(G_s - 1)\\gamma_w}}$$

Where:
- $\\eta$ = Dynamic viscosity of water
- $v$ = Settling velocity
- $G_s$ = Specific gravity of soil particles
- $\\gamma_w$ = Unit weight of water

Simplified form:

$$D = K\\sqrt{\\frac{L}{t}}$$

Where:
- $K$ = Constant depending on temperature and specific gravity
- $L$ = Effective depth of hydrometer reading
- $t$ = Time elapsed

Percentage finer:

$$\\% \\text{ Finer} = \\frac{R - R_h}{W_s} \\times 100\\%$$

Where:
- $R$ = Hydrometer reading
- $R_h$ = Hydrometer reading in pure water
- $W_s$ = Weight of dry soil

For sample RS-02:
- Total sample weight: $W_s = 50$ g
- Clay fraction (< 0.002 mm): $25$ g
- Percentage of clay: $\\frac{25}{50} \\times 100\\% = 50\\%$`
  }
];

export default function TestDetail() {
  const { testId } = useParams<{ testId: string }>();
  const test = tests.find(t => t.id === testId);

  if (!test) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-12">
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-heading font-bold mb-4">Test Not Found</h2>
              <p className="text-muted-foreground mb-6">The requested test could not be found.</p>
              <Link to="/tests">
                <Button>Back to Test Dashboard</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link to="/tests">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-heading font-bold text-foreground">
              {test.name}
            </h1>
            <Badge variant="outline">{test.status}</Badge>
            <Badge variant="secondary">{test.category}</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Sample ID: <span className="font-mono font-semibold">{test.soil}</span> | 
            Result: <span className="font-mono font-semibold">{test.result}</span>
          </p>
        </div>

        {/* Theory Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">THEORY</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none text-foreground whitespace-pre-line">
              {test.theory}
            </div>
          </CardContent>
        </Card>

        {/* Calculations Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">CALCULATIONS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none text-foreground whitespace-pre-line">
              <Latex>{test.calculations}</Latex>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

