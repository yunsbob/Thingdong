import { PresentFriend } from '@/apis/Inventory/Mutations/usePresentUnboxing';
import { instance } from '@/apis/instance';

const getInventory = async () => {
  try {
    const response = await instance.get('/objects/inventory');
    // console.log('here', response);
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

const getUnboxing = async (sentence: string) => {
  const response = await instance.get(
    `/generate3d/unBoxThing?sentence=${sentence}`
  );
  return response.data;
};

const presentUnboxing = async (presentFriend: PresentFriend) => {
  try {
    await instance.post(`/objects/present`, presentFriend);
  } catch {
    throw new Error('present unboxing error');
  }
};

export {
  getInventory,
  buyObject,
  deleteObject,
  getThingStory,
  getUnboxing,
  presentUnboxing,
};
