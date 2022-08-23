<template>
<div>
  <el-container>
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
import CommonAside from "@/components/common/CommonAside";
import CommonHeader from "@/components/common/CommonHeader";
export default {
  name: "Main",
  components: {
    CommonAside,
    CommonHeader,
  },
  created() {
    this.$router.replace('/main/home').catch(err => {})
  }
}
</script>

<style scoped lang="less">
.el-container {
  width: 100vw;
  height: 100vh;
}
</style>