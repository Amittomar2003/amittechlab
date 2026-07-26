import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listSkillsTool from "./tools/list-skills";
import listProjectsTool from "./tools/list-projects";
import getExperienceTool from "./tools/get-experience";

export default defineMcp({
  name: "amit-tomar-portfolio-mcp",
  title: "Amit Tomar Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Public tools exposing Amit Tomar's data-analyst portfolio. Use `get_profile` for bio and contact links, `list_skills` for tools and proficiency, `list_projects` for featured analytics projects, and `get_experience` for work history and education.",
  tools: [getProfileTool, listSkillsTool, listProjectsTool, getExperienceTool],
});
