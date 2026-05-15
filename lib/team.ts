import { StaticImageData } from "next/image";
import himank_yadav from "@/public/team/himank_yadav.jpeg";
import engineering_team_image from "@/public/team/engineering_team.jpg";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: StaticImageData;
  alt: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "bhupesh",
    name: "Himank Yadav",
    role: "Co-founder & CEO",
    bio: "Himank brings deep engineering experience across distributed systems, AI, and operational design. He founded Mettle to bridge the gap between strategic intent and working systems.",
    image:
      himank_yadav,
    alt: "Himank Yadav, Co-founder & CEO",
  },
  {
    id: "engineering",
    name: "Engineering Team",
    role: "Builders & Systems Thinkers",
    bio: "Our team is made up of engineers who have shipped real products under real constraints — across SaaS platforms, automation pipelines, and enterprise integrations.",
    image:
      engineering_team_image,
    alt: "Engineering Team, Builders & Systems Thinkers",
  },
];
