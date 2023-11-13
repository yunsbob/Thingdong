import { thingsInstance } from '@/apis/instance';

const getThings = async () => {
  try {
    const { data } = await thingsInstance.get('/');
    return data;
  } catch {
    new Error('get things error');
  }
};

export { getThings };
