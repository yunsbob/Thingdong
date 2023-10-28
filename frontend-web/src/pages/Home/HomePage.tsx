import Button from '@/components/atoms/Button/Button';
import theme from '@/styles/theme';

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      {/* Button 활용 예시용 임시 */}
      <div style={{ padding: '40px', display: 'flex', flexWrap: 'wrap', gap: '20px 20px' }}>
        <Button option={'activated'} size={'large'}>
          띵동 activated large
        </Button>
        <Button option={'flat'} size={'large'} >
          flat large
        </Button>
        <Button option={'deactivated'} size={'medium'}>
          deactivated medium
        </Button>
        <Button option={'activated'} size={'medium'} $backgroundColor={theme.color.blue3}>
          and custom background
        </Button>
        <Button option={'danger'} size={'small'}>
          danger small
        </Button>
        <Button option={'ghost'} size={'extraSmall'} >
          ghost extraSmall
        </Button>
      </div>
    </>
  );
};

export default HomePage;
