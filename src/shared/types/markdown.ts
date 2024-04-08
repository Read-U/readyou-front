import { TeamMemberInfo } from "../components/TeamTableInput";

export interface ItemProps {
  id: string;
  type: string;
  name?: string;
  detail?: string;
  imageNameList?: string[];
  teamMembers?: TeamMemberInfo[];
}
