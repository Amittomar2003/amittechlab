import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Database, BarChart3, Code, FileSpreadsheet, Brain, TrendingUp } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: [
        { name: "SQL", level: 90 },
        { name: "Excel", level: 85 },
        { name: "Power BI", level: 88 },
        { name: "Python", level: 75 },
      ]
    },
    {
      title: "Visualization",
      icon: <TrendingUp className="h-6 w-6" />,
      skills: [
        { name: "Power BI Dashboards", level: 90 },
        { name: "Data Storytelling", level: 85 },
        { name: "KPI Tracking", level: 88 },
        { name: "Interactive Reports", level: 80 },
      ]
    },
    {
      title: "Technical",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Database Design", level: 80 },
        { name: "Data Cleaning", level: 92 },
        { name: "ETL Processes", level: 75 },
        { name: "Statistical Analysis", level: 70 },
      ]
    }
  ];

  const tools = [
    { name: "SQL Server", icon: <Database className="h-8 w-8" /> },
    { name: "Power BI", icon: <BarChart3 className="h-8 w-8" /> },
    { name: "Excel", icon: <FileSpreadsheet className="h-8 w-8" /> },
    { name: "Python", icon: <Code className="h-8 w-8" /> },
    { name: "Analytics", icon: <Brain className="h-8 w-8" /> },
    { name: "Visualization", icon: <TrendingUp className="h-8 w-8" /> },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive skill set in data analysis, visualization, and business intelligence tools
          </p>
        </div>
        
        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Tools */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={tool.name} 
                className="flex flex-col items-center p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-3">
                  {tool.icon}
                </div>
                <span className="text-sm font-medium text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;