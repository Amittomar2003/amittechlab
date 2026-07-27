import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, MapPin, ExternalLink } from "lucide-react";
import mitsSepCert from "@/assets/cert-mits-sep.png";
import graphicDesignCert from "@/assets/cert-graphic-design.png";
import cricketCert from "@/assets/cert-cricket.jpg";
import elevateLabsCert from "@/assets/cert-elevate-labs-internship.jpeg.asset.json";

const Experience = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional journey and academic background in data analysis and mathematics
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Professional Experience
            </h3>
            
            <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-primary">Data Analyst Intern</CardTitle>
                    <CardDescription className="text-lg font-medium mt-1">
                      Elevate Labs (Skill India - Ministry of MSME)
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    June 2025 - July 2025
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Remote
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Successfully completed comprehensive Data Analyst Internship program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Demonstrated strong analytical thinking and problem-solving skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Recognized as Best Performer among all participants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Applied data analysis techniques to real-world business scenarios</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              Education
            </h3>
            
            <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="text-xl text-primary">B.Tech in Mathematics & Computing</CardTitle>
                <CardDescription className="text-lg font-medium mt-1">
                  Madhav Institute of Technology & Science, Gwalior
                </CardDescription>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    2022 - 2026
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Gwalior, MP
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pursuing a comprehensive degree program combining mathematical foundations with computational skills, 
                  providing strong analytical and problem-solving capabilities essential for data analysis.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-xl text-primary">12th Standard</CardTitle>
                <CardDescription className="text-lg font-medium mt-1">
                  ST John Vianney School
                </CardDescription>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    CBSE Board
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Completed senior secondary education with strong foundation in mathematics and sciences, 
                  laying the groundwork for analytical and computational thinking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Certificates */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Data Analyst Internship - Certificate of Completion",
                issuer: "Elevate Labs (Skill India - Ministry of MSME)",
                icon: "🏆",
                link: elevateLabsCert.url
              },
              {
                title: "Career Essentials in Generative AI",
                issuer: "Microsoft & LinkedIn",
                icon: "🤖",
                link: "https://drive.google.com/file/d/1nQ6Ev0utK6njEapRS2S_Ol8FLM9BV8tv/view?usp=drivesdk"
              },
              {
                title: "Data Analytics Essentials",
                issuer: "Cisco Academy",
                icon: "📊",
                link: "https://drive.google.com/file/d/1URcwbsJXQ_rSTucd2_FSue5s_pdoJCDI/view?usp=drivesdk"
              },
              {
                title: "Data Visualisation: Empowering Business with Effective Insights",
                issuer: "Tata x Forage",
                icon: "📈",
                link: "https://drive.google.com/file/d/1VJR4Tsy2yYJxergpLnx1jjLy-09oskdA/view?usp=drivesdk"
              },
              {
                title: "Skill Enhancement Program (SEP)",
                issuer: "MITS-DU, Gwalior",
                icon: "💻",
                link: mitsSepCert,
                description: "Communication Skills, General Aptitude & Competitive Coding (Grade B+)"
              },
              {
                title: "Graphic Design Summer Internship",
                issuer: "MITS, Gwalior",
                icon: "🎨",
                link: graphicDesignCert,
                description: "Grade A (June 2023)"
              },
              {
                title: "Cricket Tournament - Runners Up",
                issuer: "MITS, Gwalior",
                icon: "🏏",
                link: cricketCert,
                description: "Intra Mural Cricket Tournament (June 2023)"
              }
            ].map((cert, index) => (
              <Card 
                key={cert.title} 
                className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center animate-fade-in cursor-pointer group" 
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(cert.link, '_blank')}
              >
                <CardHeader className="relative">
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-4xl mb-2">{cert.icon}</div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">{cert.title}</CardTitle>
                  <CardDescription className="font-medium">{cert.issuer}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;