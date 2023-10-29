import Input from "@/components/atoms/Input/Input";

const FriendPage = () => {
  return (
    <>
      FriendPage
      {/* Input 활용 예시용 임시 */}
      <div
        style={{
          padding: '40px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px 20px',
        }}
      ><Input option='default' inputSize='medium' placeholder='아무거나 입력하세요'> </Input></div>
    </>
  );
};

export default FriendPage;
