import { defineStore } from "pinia";

const UserState = "UserState";

export interface UserInfo {
  userId: string | number;
  username: string;
  avatar: string;
}
declare type Nullable<T> = T | null;

export interface User {
  userInfo: Nullable<UserInfo>;
  token?: string;
}

export const userStore = defineStore(UserState, {
  state: (): User => {
    return {
      userInfo: null,
      token: undefined,
    };
  },
  getters: {
    getUserInfo: (state): Nullable<UserInfo> => state.userInfo,
    getToken: (state): string => {
      return state.token || "";
    },
  },
  actions: {
    setToken(info: string | undefined) {
      this.token = info ? info : "";
    },
    setUserInfo(info: UserInfo | null) {
      this.userInfo = info;
    },
  },
});
