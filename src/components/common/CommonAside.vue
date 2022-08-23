<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose"
           :collapse="isCollapse"
           background-color="#333"
           :unique-opened="true"
           text-color="white"
  >
    <el-menu-item>
      <i class="el-icon-menu"></i>
      <span slot="title">智能照明管理系统</span>
    </el-menu-item>
    <el-menu-item v-for="(item, index) in noChildMenu"
                  :key="item.name" :index="(index+1) + ''"
                  @click="toPath(item)" >
      <i :class="item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="(item, index) in hasChildMenu"
                :key="item.name"
                :index="(index+1) +''">
      <template slot="title">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="(subItem, subIndex) in item.children"
                      :key="subItem.name"
                      :index="'1-' + (subIndex+1)"
                      @click="toPath(subItem)">
          {{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-aside {
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>

<script>
export default {
  name: 'CommonAside',
  data() {
    return {
      menu: [
        {
          path: '/main/home',
          name: 'home',
          icon: 'el-icon-s-home',
          label: '首页',
          children: []
        },
        {
          path: '/main/realdata',
          name: 'realdata',
          icon: 'el-icon-data-line',
          label: '实时数据',
          children: []
        },
        {
          path: '',
          name: 'task',
          icon: 'el-icon-notebook-2',
          label: '计划任务',
          children: [
            {
              path: '/main/planTask',
              name: 'planTask',
              icon: '',
              label: '计划任务'
            },
            {
              path: '/main/taskLog',
              name: 'taskLog',
              icon: '',
              label: '任务日志'
            }
          ]
        },
        {
          path: '',
          name: 'projectCenter',
          icon: 'el-icon-postcard',
          label: '项目中心',
          children: [
            {
              path: '/main/projectManage',
              name: 'projectManage',
              icon: '',
              label: '项目管理'
            },
            {
              path: '/main/monitorManage',
              name: 'monitorManage',
              icon: '',
              label: '监测点管理'
            },
            {
              path: '/main/concentratorManage',
              name: 'concentratorManage',
              icon: '',
              label: '集中器管理'
            },
            {
              path: '/main/deviceManage',
              name: 'deviceManage',
              icon: '',
              label: '设备管理'
            },
            {
              path: '/main/deviceGroup',
              name: 'deviceGroup',
              icon: '',
              label: '设备区组'
            },
          ]
        }
      ]
    };
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse
    },
    noChildMenu() {
      return this.menu.filter(item => item.children.length == 0)
    },
    hasChildMenu() {
      return this.menu.filter(item => !item.children.length == 0)
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toPath(item) {
      this.$router.replace(item.path).catch(err => {})
    }
  }
}
</script>