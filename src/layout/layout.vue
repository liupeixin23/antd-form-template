<!--
 * @Author: liupeixin liupx@nancal.com
 * @Date: 2022-06-01 17:11:29
 * @LastEditors: liupeixin liupx@nancal.com
 * @LastEditTime: 2022-07-12 17:06:38
 * @FilePath: /digital-process-ui/personal-work/src/layout/layout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="overflow-hidden flex h-full">
    <!-- <a-layout class="flex flex-col flex-1 overflow-hidden">
      <div class="flex contentBox">
        <a-layout-content class="flex-1 flex flex-col bg-white relative rounded-11 overflow-auto">
          <headerFunctionalAreas id="header"></headerFunctionalAreas>
          <router-view id="main" class="flex-1 flex flex-col overflow-auto" />
          <template>
            <a-empty v-if="!isCheck" class="flex-1 flex flex-col justify-content-center rounded-11" />
          </template>
        </a-layout-content>
      </div>
    </a-layout> -->
    <home></home>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import headerFunctionalAreas from './components/headerFunctionalAreas';
import home from '@/views/home/index';
export default {
  name: 'Layout',
  components: {
    headerFunctionalAreas,
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
    this.setToken();
  },
  mounted() {
  },
  methods: {
    ...mapMutations(['SET_TOKEN']),
    setToken() {
      let json = this.$route.query;
      if (json.tk) {
        this.SET_TOKEN(json.tk);
      } else {
        localStorage.clear();
        window.parent.postMessage(
          {
            type: 'childFrame',
            url: window.location.href,
          },
          '*'
        );
      }
    },
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
