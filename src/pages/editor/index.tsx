import Editor from '@/shared/components/Editor';
import Preview from '@/shared/components/Preview';
import { styled } from 'styled-components';

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const EditorPage = () => {
  return (
    <Box>
      <Editor />
      <Preview />
    </Box>
  );
};

export default EditorPage;
