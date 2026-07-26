import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_experience",
  title: "Get experience and education",
  description:
    "Get Amit Tomar's professional experience and education history, including internships and certifications.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const data = {
      experience: [
        {
          role: "Data Analyst Intern",
          organization: "Elevate Labs (Skill India - Ministry of MSME)",
          period: "June 2025 - July 2025",
          location: "Remote",
          badge: "Best Performer",
          highlights: [
            "Successfully completed comprehensive Data Analyst Internship program",
            "Demonstrated strong analytical thinking and problem-solving skills",
            "Recognized as Best Performer among all participants",
            "Applied data analysis techniques to real-world business scenarios",
          ],
        },
      ],
      education: [
        {
          degree: "B.Tech in Mathematics & Computing",
          institution: "Madhav Institute of Technology & Science, Gwalior",
          period: "2022 - 2026",
        },
      ],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
