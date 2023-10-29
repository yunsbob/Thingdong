import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import theme from '@/styles/theme';

const FriendPage = () => {
  return (
    <>
      FriendPage
      {/* Input 활용 예시용 임시 */}
      <div
        style={{
          padding: '40px',
          gap: '20px 20px',
          backgroundColor: theme.color.grey3,
        }}
      >
        <Input
          option="default"
          inputSize="medium"
          placeholder={'default, medium input'}
        />
      </div>
      <div
        style={{
          padding: '40px',
          gap: '20px 20px',
        }}
      >
        <Input
          option="grey"
          inputSize="small"
          placeholder="grey, small input"
        />
      </div>
    </>
  );
};

export default FriendPage;
