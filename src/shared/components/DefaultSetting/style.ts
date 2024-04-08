import styled from 'styled-components';
import { ItemProps } from '@/shared/types/markdown';

export const MarkdownTemplateList = styled.ul`
  width: 100%;
  padding: 2.4rem 2rem;
  overflow-y: auto;
  height: calc(100vh - 12.4rem);

  background: #ffffff;
  border-radius: 1rem;
`;

export const TemplateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;

export const Info = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const HightlightText = styled.span`
  color: ${(props) => props.theme.colors.blue};
`;

export const SettingButton = styled.button`
  color: ${(props) => props.theme.colors.lightblue};
  background: ${(props) => props.theme.colors.blue};
`;

export const MarkdownTemplateItem = styled.label<{
  checked: boolean;
  type: ItemProps['type'];
}>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 1.2rem 2rem;
  border-radius: 1rem;
  background-color: ${(props) => {
    const { type, checked, theme } = props;
    switch (type) {
      case 'required':
        return theme.colors.gray;
      case 'optional':
        return checked ? theme.colors.lightblue : theme.colors.lightgray;
      default:
        return checked ? theme.colors.lightgray : theme.colors.lightgray;
    }
  }};
  cursor: ${(props) => (props.type === 'optional' ? 'pointer' : 'default')};
  transition: all 0.2s ease-in-out;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  > *:not(:last-child) {
    margin-right: 16px;
  }
`;

export const EmptyBox = styled.div`
  width: 20px;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.darknavy};
  font-size: 1.6rem;
`;
