import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get Amit Tomar's public profile: headline, summary, location, education and contact links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Amit Tomar",
      headline: "Data Analyst & Business Intelligence Specialist",
      summary:
        "Detail-oriented Data Analyst with hands-on experience in SQL, Excel, Python and Power BI. Passionate about transforming raw data into actionable insights that drive business decisions.",
      location: "Gwalior, MP, India",
      education: {
        degree: "B.Tech in Mathematics & Computing",
        institution: "Madhav Institute of Technology & Science, Gwalior",
        years: "2022 - 2026",
      },
      contact: {
        email: "amyttomar@gmail.com",
        phone: "+91 7389671194",
        linkedin: "https://www.linkedin.com/in/amit-tomar-47583a2a7",
        github: "https://github.com/Amittomar2003",
      },
      highlights: {
        projectsCompleted: "15+",
        dataSourcesAnalyzed: "50+",
        efficiencyImprovement: "25%",
        cancellationReduction: "20%",
      },
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
