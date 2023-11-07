import { instance } from '@/apis/instance';
import { Guestbook } from '@/types/guestbook';

const getGuestbooks = async (userId: string) => {
  try {
    const { data } = await instance.get(`/guest-books?userId=${userId}`);
    return data;
  } catch {
    new Error('get guestbooks error');
  }
};

const addGuestbook = async (data: Guestbook) => {
  try {
    await instance.post('/guest-books', data);
  } catch {
    new Error('guestbook add error');
  }
};

const deleteGuestbook = async (guestBookId: string) => {
  try {
    await instance.delete(`guest-books/${guestBookId}`);
  } catch {
    throw new Error('delete guestbook error');
  }
}

export { getGuestbooks, addGuestbook, deleteGuestbook };
