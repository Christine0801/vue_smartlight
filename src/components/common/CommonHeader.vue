<template>
<div class="common-header">
  <div class="left">
    <el-button type="primary" icon="el-icon-menu" @click="collapse"></el-button>
<!--    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/main/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>-->
  </div>
  <div class="right">
    <el-dropdown @command="handlerCommand">
      <span class="el-dropdown-link">
        <img :src="userAvatar" alt="">
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="">个人中心</el-dropdown-item>
        <el-dropdown-item command="exit">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</div>
</template>

<script>
export default {
  name: "CommonHeader",
  data() {
    return {
      userAvatar: require("@/assets/img/bg_1.webp")
    }
  },
  methods: {
    collapse() {
      this.$store.commit('collapse')
    },
    handlerCommand(command) {
      if (command === 'exit')
        this.$router.replace('/login')
    }
  }
}
</script>

<style scoped lang="less">
  .common-header {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    .right {
      .el-dropdown-link {
        img {
          width: 40px;
          border-radius: 50%;
        }
      }
    }
  }
</style>