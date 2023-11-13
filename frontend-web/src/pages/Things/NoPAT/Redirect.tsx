import { CHILDREN_PATH } from '@/constants/path';

const Redirect = () => {
  const params = new URLSearchParams(location.search);

  const authToken = params.get('authToken');
  const installedAppId = params.get('installedAppId');

  localStorage.setItem('authToken', authToken ?? '');
  localStorage.setItem('installedAppId', installedAppId ?? '');

  //TODO: 나중에 localhost:3000을 thingdong.com으로 바꾸기
  window.location.replace(
    `http://localhost:3000/${CHILDREN_PATH.BOTTOM_NAV_PATH.THINGS}`
  );
  return <></>;
};

export default Redirect;
