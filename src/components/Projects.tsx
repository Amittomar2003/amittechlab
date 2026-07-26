import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingDown, Activity, ShoppingBag } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "OLA Ride Cancellation Analysis",
      description: "Identified key reasons and trends for ride cancellations using SQL data processing and Power BI visualization.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop&crop=center",
      impact: "20% reduction in cancellation rate",
      technologies: ["SQL", "Power BI", "Data Cleaning", "Trend Analysis"],
      icon: <TrendingDown className="h-6 w-6" />,
      results: [
        "Processed multi-source data using advanced SQL queries",
        "Created interactive dashboards for stakeholder insights",
        "Identified peak cancellation patterns and root causes"
      ],
      link: "https://app.powerbi.com/groups/me/reports/35565868-1ebd-42a9-b36d-91bb46f35b7e?experience=power-bi",
      github: "#"
    },
    {
      title: "Hospital Performance Tracker",
      description: "Developed comprehensive Power BI dashboard for tracking key hospital performance metrics and business trends.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop&crop=center",
      impact: "25% improvement in decision-making efficiency",
      technologies: ["Power BI", "SQL", "KPI Tracking", "Interactive Dashboards"],
      icon: <Activity className="h-6 w-6" />,
      results: [
        "Extracted and transformed data from multiple sources",
        "Built real-time KPI monitoring system",
        "Enabled drill-down analytics for detailed insights"
      ],
      link: "https://app.powerbi.com/links/Df2tQioFdx?ctid=4fd60770-0a1d-4047-b029-26a2cc4b34e2&pbi_source=linkShare",
      github: "#"
    },
    {
      title: "Customer Shopping Behavior Analysis",
      description: "End-to-end analytics workflow turning raw customer data into strategic business intelligence — from cleaning and modeling in Python to SQL analysis and an interactive Power BI dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
      impact: "Full end-to-end analytics pipeline",
      technologies: ["Python", "SQL", "Power BI", "EDA", "Data Modeling"],
      icon: <ShoppingBag className="h-6 w-6" />,
      results: [
        "Cleaned, transformed and explored the raw dataset in Python",
        "Ran SQL queries on customer segments, loyalty and purchase drivers",
        "Built an interactive Power BI dashboard highlighting key trends"
      ],
      link: "https://github.com/Amittomar2003/Customer-trend-analysis",
      github: "https://github.com/Amittomar2003/Customer-trend-analysis"
    }
  ];


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world data analysis projects demonstrating measurable business impact
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="group bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  {project.icon}
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
                    <TrendingDown className="w-4 h-4 mr-1" />
                    {project.impact}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {project.link === project.github ? "View Project" : "View Dashboard"}
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;