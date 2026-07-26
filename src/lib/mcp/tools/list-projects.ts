import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List Amit Tomar's featured data analytics projects with impact, technologies, key results and links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const projects = [
      {
        title: "OLA Ride Cancellation Analysis",
        description:
          "Identified key reasons and trends for ride cancellations using SQL data processing and Power BI visualization.",
        impact: "20% reduction in cancellation rate",
        technologies: ["SQL", "Power BI", "Data Cleaning", "Trend Analysis"],
        results: [
          "Processed multi-source data using advanced SQL queries",
          "Created interactive dashboards for stakeholder insights",
          "Identified peak cancellation patterns and root causes",
        ],
        link: "https://app.powerbi.com/groups/me/reports/35565868-1ebd-42a9-b36d-91bb46f35b7e?experience=power-bi",
      },
      {
        title: "Hospital Performance Tracker",
        description:
          "Comprehensive Power BI dashboard tracking key hospital performance metrics and business trends.",
        impact: "25% improvement in decision-making efficiency",
        technologies: ["Power BI", "SQL", "KPI Tracking", "Interactive Dashboards"],
        results: [
          "Extracted and transformed data from multiple sources",
          "Built real-time KPI monitoring system",
          "Enabled drill-down analytics for detailed insights",
        ],
        link: "https://app.powerbi.com/links/Df2tQioFdx?ctid=4fd60770-0a1d-4047-b029-26a2cc4b34e2&pbi_source=linkShare",
      },
      {
        title: "Customer Shopping Behavior Analysis",
        description:
          "End-to-end analytics workflow turning raw customer data into strategic business intelligence — from cleaning and modeling in Python to SQL analysis and an interactive Power BI dashboard.",
        impact: "Full end-to-end analytics pipeline",
        technologies: ["Python", "SQL", "Power BI", "EDA", "Data Modeling"],
        results: [
          "Cleaned, transformed and explored the raw dataset in Python",
          "Ran SQL queries on customer segments, loyalty and purchase drivers",
          "Built an interactive Power BI dashboard highlighting key trends",
        ],
        link: "https://github.com/Amittomar2003/Customer-trend-analysis",
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
      structuredContent: { projects },
    };
  },
});
