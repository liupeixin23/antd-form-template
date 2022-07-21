<!--
 * @Author: liupeixin liupx@nancal.com
 * @Date: 2022-07-19 17:21:58
 * @LastEditors: liupeixin liupx@nancal.com
 * @LastEditTime: 2022-07-21 11:12:06
 * @FilePath: /form-tempalte/src/components/antd-form-plugin/components/formModelItem.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by liupeixin liupx@nancal.com, All Rights Reserved. 
-->
<template>
  <div class="form_item">
    <label class="form_item_label">
      {{ label }}
    </label>
    <div class="form_item_con">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormModelItem",
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style  lang="less" scoped>
.form_item {
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 12px;
  .form_item_label {
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .form_item_con {
    line-height: 40px;
    position: relative;
    font-style: 14px;
    overflow: hidden;
  }
}
</style>
