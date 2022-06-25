const __piniaKey = "__PINIAKEY__";

import { PiniaPluginContext } from "pinia";
import { toRaw } from "vue";

//将数据存在本地
const setStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

//存缓存中读取
const getStorage = (key: string) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) as string)
    : {};
};

type Options = {
  key?: string;
};

//利用函数柯丽华接受用户入参
export const piniaPlugin = (options: Options) => {
  //将函数返回给pinia  让pinia  调用 注入 context
  return (context: PiniaPluginContext) => {
    const { store } = context;

    const data = getStorage(`${options?.key ?? __piniaKey}-${store.$id}`);

    store.$subscribe(() => {
      setStorage(
        `${options?.key ?? __piniaKey}-${store.$id}`,
        toRaw(store.$state)
      );
    });

    return {
      ...data,
    };
  };
};
