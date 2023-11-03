import { instance } from '@/apis/instance';

const getInventory = async () => {
  try {
    const response = await instance.get('/objects/inventory');
    return response.data;
  } catch {
    throw new Error('get inventory error');
  }
};

export { getInventory }