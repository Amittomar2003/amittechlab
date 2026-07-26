import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description:
    "List Amit Tomar's technical skills and tools with proficiency levels, grouped by category.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const skills = {
      categories: [
        {
          title: "Data Analysis",
          skills: [
            { name: "SQL", level: 90 },
            { name: "Excel", level: 85 },
            { name: "Power BI", level: 88 },
            { name: "Python", level: 75 },
          ],
        },
        {
          title: "Visualization",
          skills: [
            { name: "Power BI Dashboards", level: 90 },
            { name: "Data Storytelling", level: 85 },
            { name: "KPI Tracking", level: 88 },
            { name: "Interactive Reports", level: 80 },
          ],
        },
        {
          title: "Technical",
          skills: [
            { name: "Database Design", level: 80 },
            { name: "Data Cleaning", level: 92 },
            { name: "ETL Processes", level: 75 },
            { name: "Statistical Analysis", level: 70 },
          ],
        },
      ],
      tools: [
        "SQL Server",
        "Power BI",
        "Excel",
        "Python",
        "Analytics",
        "Visualization",
      ],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(skills, null, 2) }],
      structuredContent: skills,
    };
  },
});
