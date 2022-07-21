<!--
 * @Author: liupeixin liupx@nancal.com
 * @Date: 2022-06-01 17:11:29
 * @LastEditors: liupeixin liupx@nancal.com
 * @LastEditTime: 2022-07-14 14:51:31
 * @FilePath: /form-tempalte/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <router-view />
  <!-- <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider> -->
</template>
<script>
export default {
  data() {
    return {
      // locale: require('ant-vue-nancal/es/locale-provider/zh_CN').default,
    };
  },
  computed: {
  },
};
</script>
