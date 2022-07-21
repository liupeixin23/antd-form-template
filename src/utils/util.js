/*
 * @Author: liupeixin liupx@nancal.com
 * @Date: 2022-05-20 15:16:15
 * @LastEditors: liupeixin liupx@nancal.com
 * @LastEditTime: 2022-07-14 14:51:53
 * @FilePath: /form-tempalte/src/utils/util.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// eslint-disable-next-line max-classes-per-file
// import { message } from 'ant-vue-nancal';
import request from '@/services/request';
import _cloneDeep from 'lodash.clonedeep';
import debounce from 'lodash.debounce';

export const utilSelf = {
  http: request,
  mode: process.env.VUE_APP_ENV,
  origin: window.location.origin,
  baseUrl: process.env.VUE_APP_ENV === 'dev' ? process.env.VUE_APP_BASE_API : window.location.origin,
  success(msg, duration) {
    message.success(msg || '操作成功！', duration || 0.5);
  },
  warning(msg, duration) {
    message.warning(msg || '操作成功！', duration || 0.5);
  },
  error(msg, duration) {
    message.error(msg || '操作失败！', duration || 0.5);
  },
  getStorage(key) {
    if (key) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      return null;
    }
  },
  setStorage(key, val) {
    if (key && val) {
      localStorage.setItem(key, JSON.stringify(val));
    }
  },
  removeStorage(key) {
    if (key) {
      localStorage.removeItem(key);
    }
  },
  toLogin() {
    let url = encodeURIComponent(`${this.origin}/code-design`);
    window.location.href = `${this.baseUrl}/mp-login/?app-code=code-design&return-url=${url}`;
  },
  _cloneDeep(val) {
    return _cloneDeep(val);
  },
  _debounce() {
    debounce(function () {
      console.log('111防抖');
    }, 1000);
  },
};

export default {
  install(Vue) {
    Vue.prototype.util = utilSelf;
  },
};
