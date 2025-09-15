import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "amyttomar@gmail.com",
      href: "mailto:amyttomar@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 7389671194",
      href: "tel:+917389671194"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Gwalior, MP, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/amit-tomar-47583a2a7",
      username: "amit-tomar-47583a2a7"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/Amittomar2003",
      username: "Amittomar2003"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss your next project.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                I'm always interested in discussing new opportunities in data analysis, 
                business intelligence, and data visualization projects.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={info.label} className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-colors animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-white">{info.icon}</div>
                  <div>
                    <p className="text-white/60 text-sm">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-white hover:text-accent transition-colors font-medium">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-white">{social.icon}</div>
                    <div>
                      <p className="text-white/60 text-xs">{social.label}</p>
                      <p className="text-white text-sm font-medium">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-white text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-medium block mb-2">Name</label>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium block mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-accent"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-white text-sm font-medium block mb-2">Subject</label>
                <Input 
                  placeholder="Project Discussion" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-accent"
                />
              </div>
              
              <div>
                <label className="text-white text-sm font-medium block mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or how I can help..." 
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-accent resize-none"
                />
              </div>
              
              <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold group">
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;