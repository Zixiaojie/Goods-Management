<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header />
      </el-header>
      <commom-tag />
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";
import CommomTag from "@/components/CommomTag";

export default {// eslint-disable-next-line
  name: "Home",
  components: {
    CommonAside,
    CommonHeader,
    CommomTag
  },
  data() {
    return {}
  },
 };
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
}
</style>