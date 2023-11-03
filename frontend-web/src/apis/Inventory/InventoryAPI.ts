import { instance } from '@/apis/instance';

const getInventory = async () => {
  try {
    const response = await instance.get('/objects/inventory');
    return response.data;
  } catch {
    throw new Error('get inventory error');
  }
};

const buyObject = async (userObjectId: number) => {
  try {
    await instance.put(`/objects?userObjectId=${userObjectId}`);
  } catch {
    throw new Error(' buy object error');
  }
};

const deleteObject = async (userObjectId: number) => {
  try {
    await instance.delete(`/objects?userObjectId=${userObjectId}`);
  } catch {
    throw new Error('delete object error');
  }
};

const getThingStory = async () => {
  try {
    const response = await instance.get('/thing-history');
    return response.data;
  } catch {
    throw new Error('get thing-history error');
  }
};

export { getInventory, buyObject, deleteObject, getThingStory }