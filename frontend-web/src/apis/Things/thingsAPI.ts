import { thingsInstance } from '@/apis/instance';
import { ThingsStatus } from '@/types/things';
import { instance } from '@/apis/instance';

const getThings = async () => {
  try {
    const data = await thingsInstance.get('/');
    console.log('data123', data);
    return data;
  } catch {
    new Error('get things error');
  }
};

const updateThingsStatus = async (data: ThingsStatus) => {
  try {
    await instance.put('smart-things/status', data);
  } catch {
    throw new Error('update things status error');
  }
};

export { getThings, updateThingsStatus };
