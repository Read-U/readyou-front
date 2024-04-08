interface TeamMember {
  githubUserInfo: string[];
  role: string;
}

export interface ItemProps {
  id: string;
  type: string;
  name?: string;
  detail?: string;
  imageNameList?: string[];
  teamMembers?: TeamMember[];
}
