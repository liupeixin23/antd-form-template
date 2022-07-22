<!--
 * @Author: liupeixin liupx@nancal.com
 * @Date: 2022-06-01 17:11:29
 * @LastEditors: liupeixin liupx@nancal.com
 * @LastEditTime: 2022-07-22 10:26:58
 * @FilePath: /antd-form-template/src/layout/layout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="overflow-hidden flex h-full">
    <home></home>
  </div>
</template>

<script>
import home from '@/views/home/index';
export default {
  name: 'Layout',
  components: {
    home
  },
  data() {
    return {
      isCheck: false,
    };
  },
  computed: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
#main {
  width: 100vw;
  overflow: auto;
}
.contentBox {
  height: calc(100vh - 71px);
}
#header {
  overflow: hidden;
}
</style>
