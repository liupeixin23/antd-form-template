/*
 * @Author: liupeixin liupx@nancal.com
 * @Date: 2021-11-19 15:36:51
 * @LastEditors: liupeixin liupx@nancal.com
 * @LastEditTime: 2022-07-19 18:02:04
 * @FilePath: /form-tempalte/src/components/element-form-plugin/index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by liupeixin liupx@nancal.com, All Rights Reserved. 
 */
import antdForm from './index.vue'

antdForm.install = function (Vue) {
  Vue.component(antdForm.name, antdForm)
}

export default antdForm
