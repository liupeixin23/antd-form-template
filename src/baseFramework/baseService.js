/*
 * @Author: liupeixin liupx@nancal.com
 * @Date: 2022-05-20 15:16:15
 * @LastEditors: liupeixin liupx@nancal.com
 * @LastEditTime: 2022-07-14 14:51:40
 * @FilePath: /form-tempalte/src/baseFramework/baseService.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { message } from 'ant-vue-nancal';
import router from '@/router/index';
import { of, switchMap } from 'rxjs';

export default class BaseService {
  constructor(router, store) {
    this.router = router;
    this.store = store;
  }
}

export const GenerateService = api => {
  return params => {
    return of(0).pipe(switchMap(() => api(params)));
  };
};
