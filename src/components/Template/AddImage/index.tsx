import Input from '@/shared/components/Input';
import Button from '@/shared/components/button';
import AdditionalItem from '@/shared/components/AdditionalItem/Index';

function AddImage() {
  return (
    <>
      <Input
        labelText="이미지 높이"
        type="number"
        placeholder="높이를 입력해 주세요"
        width={344}
      />
      <Input
        labelText="이미지 넓이"
        type="number"
        placeholder="넓이를 입력해 주세요"
        width={344}
      />
      <Button type="button" width={68} color="blue" bgColor="lightblue">
        추가
      </Button>
    </>
  );
}

export default AddImage;
