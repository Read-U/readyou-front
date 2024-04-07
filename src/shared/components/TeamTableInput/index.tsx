import { useEffect, useState } from 'react';
import * as S from './style';
import UploadItem from '../common/UploadItem';
import Button from '../common/Button';
import { useRecoilState } from 'recoil';
import { projectItems } from '@/recoil/states';

interface TeamMember {
  profileUrl: string[];
  githubId: string;
  role: string;
}

const TeamTableInput = () => {
  const [githubId, setGithubId] = useState('');
  const [role, setRole] = useState('');
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [teamTableMarkdown, setTeamTableMarkdown] = useState<string>('');

  const [markdown, setMarkdown] = useRecoilState(projectItems);

  /** github user 정보 불러오기 */
  const getUsers = async (props: string): Promise<string[] | undefined> => {
    try {
      const response = await fetch(`https://api.github.com/users/${props}`);
      if (response.status === 200) {
        const data = await response.json();
        return [data.avatar_url, data.login, data.name, data.html_url];
      } else {
        console.error('Failed to fetch user data:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  /** 추가 */
  const handleTeamMemberCreate = async () => {
    if (!githubId || !role) return alert('Github ID와 직무를 입력해주세요.');

    const profileUrl = await getUsers(githubId);
    if (profileUrl) {
      const newMember: TeamMember = {
        profileUrl,
        githubId,
        role,
      };

      setTeamMembers([...teamMembers, newMember]);
    }
  };

  useEffect(() => {
    const markDownImage = teamMembers
      .map(
        (member) =>
          `|<img src="${member.profileUrl}" width="150" height="150"/>`,
      )
      .join('');

    const markDownUserInfo = teamMembers
      .map(
        (member) =>
          `|${member.role}: ${member.profileUrl[2]}<br/>[@${member.profileUrl[1]}](${member.profileUrl[3]})`,
      )
      .join('');

    const table = '|:-:'.repeat(teamMembers.length);
    setTeamTableMarkdown(
      markDownImage + '\n' + table + '\n' + markDownUserInfo,
    );

    setGithubId('');
    setRole('');
  }, [teamMembers]);

  /** 프리뷰 동기화 */
  useEffect(() => {
    const newMarkdown = markdown.map((item) => {
      if (item.name === 'teamTable') {
        return {
          ...item,
          detail: `## 팀원 구성 \n ${teamTableMarkdown} <br />`,
        };
      }
      return item;
    });

    setMarkdown(newMarkdown);
  }, [teamTableMarkdown]);

  /** 삭제 */
  const handleTeamMemberDelete = (index: number) => {
    return () => {
      const newTeamMembers = teamMembers.filter((_, i) => i !== index);
      setTeamMembers(newTeamMembers);
    };
  };

  return (
    <>
      <S.RelativeBox>
        <S.Input
          type="text"
          value={githubId}
          onChange={(e) => setGithubId(e.target.value)}
          placeholder={'팀원의 Github ID를 입력하세요.'}
        />
        <S.Input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="팀원의 직무를 입력하세요."
        />
        <Button onClick={handleTeamMemberCreate}>추가</Button>
      </S.RelativeBox>
      {teamMembers.length > 0 && (
        <S.BottomWrapper>
          {teamMembers.map((member, index) => {
            return (
              <UploadItem
                key={index}
                text={`${member.githubId} | ${member.role}`}
                onClick={handleTeamMemberDelete(index)}
              />
            );
          })}
        </S.BottomWrapper>
      )}
    </>
  );
};

export default TeamTableInput;
