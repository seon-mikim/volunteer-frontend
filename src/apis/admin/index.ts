import { axiosImgInstance } from '@apis/axiosInstance/axiosInstance';

export interface UserList {
  email: string;
  name: string;
  profileImag: string;
  nickname: string;
  phoneNumber: string;
  provider: string;
  deleted: boolean;
}

export const getAllUser = async (): Promise<UserList[]> => {
  const response = await axiosImgInstance.get(`admin/allUser`);
  return response.data.data.userList;
};

export function searchCommunity(type, keyword) {
  return axiosImgInstance.get(`community/search/${type}`, {
    params: {
      keyword: keyword,
    },
  });
}
