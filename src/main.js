/*
 * @Author: liupeixin liupx@nancal.com
 * @Date: 2022-05-20 15:16:15
 * @LastEditors: liupeixin liupx@nancal.com
 * @LastEditTime: 2022-07-20 19:03:42
 * @FilePath: /form-tempalte/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import App from './App.vue';
import router from '@/permission.js';
import store from './store';
import Antd from 'ant-design-vue';

import { Form, Button, Cascader, Input, InputNumber, Select } from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import antdForm from '@/components/antd-form-plugin'
Vue.use(antdForm)

/**替换组件库中的时间插件 */
import * as dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

import util from '@/utils/util.js'; // 工具类

import '@/utils/directive.js';
Vue.use(Form).use(Button).use(Cascader).use(Input).use(InputNumber).use(Select)
Vue.use(ElementUI, { size: 'small' })
Vue.use(util); // 工具类
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
