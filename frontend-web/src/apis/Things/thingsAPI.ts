import { thingsInstance } from '@/apis/instance';
import { ThingsStatus, ToggleThingsStatus } from '@/types/things';
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

const toggleThingsStatus = async (
  deviceId: string,
  data: ToggleThingsStatus
) => {
  try {
    await thingsInstance.post(`/command/${deviceId}`, data);
  } catch (error) {
    console.error('update toggle things status error', error);
    console.log('내가 넣은 데이타~', data);
    throw error;
  }
};

export { getThings, updateThingsStatus, toggleThingsStatus };
