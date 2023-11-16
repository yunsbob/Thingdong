import { thingsInstance } from '@/apis/instance';
import { ThingsStatus, ThingsStatusCommands } from '@/types/things';
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
    console.log(data, 'updateThingsStatus');
    
  } catch {
    throw new Error('update things status error');
  }
};

const commandThingsStatus = async (
  deviceId: string,
  data: ThingsStatusCommands
) => {
  try {
    await thingsInstance.post(`/command/${deviceId}`, data);
  } catch (error) {
    console.error('update toggle things status error', error);
    console.log('내가 넣은 데이타~', data);
    console.log('디바이스아이디~', deviceId);
    throw error;
  }
};

export { getThings, updateThingsStatus, commandThingsStatus };
