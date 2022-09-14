<template>
<div class="tabs">
  <el-tag @click="tagClick({
          path: '/main/home',
          name: 'home',
          icon: 'el-icon-s-home',
          label: '首页',
          children: []
        }, 0)"
          :class="{'tag-active': $store.state.tabMask == 0}">首页</el-tag>
  <el-tag
      v-for="(tag, index) in $store.state.tabList"
      :key="tag.name"
      :index = 'index+1'
      @click="tagClick(tag, index+1)"
      @close="close(tag, index+1)"
      :class="{'tag-active': $store.state.tabMask == index+1}"
      closable
      >
    {{tag.label}}
  </el-tag>
</div>
</template>

<script>
export default {
  name: "CommonTabs",
  data() {
    return {
      mask: 0,
    }
  },
  methods: {
    tagClick(tag, index) {
      this.$store.commit('changeTabMask',index)
      this.$router.replace(tag.path)
    },
    close(tag, index) {
      /*this.$store.commit('subTab', index)
      let list = this.$store.state.tabList
      if (list[index+1] != null && list[index+1] != undefined){
        this.$router.replace(list[index+1].path)
        this.$store.commit("changeTabMask",index+1)
      }
      else if (list.length == 0) {
        this.$store.commit("changeTabMask",0)
        this.$router.replace('/main/home')
      }else {
        this.$store.commit("changeTabMask",index)
        this.$router.replace(list[index-1].path)
      }*/
      let list = this.$store.state.tabList
      if (this.$store.state.tabMask == index){
        if (list[index] != null && list[index] != undefined){
          this.$router.replace(list[index].path).catch(err => {})
          this.$store.commit('subTab', index-1)
          this.$store.commit('changeTabMask',index-1)
        }else if (list[index-2] != null && list[index-2] != undefined) {
          this.$router.replace(list[index-2].path).catch(err => {})
          this.$store.commit('subTab', index-1)
          this.$store.commit('changeTabMask',index-1)
        }else {
          this.$router.replace('/main/home').catch(err => {})
          this.$store.commit('subTab', index-1)
          this.$store.commit('changeTabMask',0)
        }
      }
      if(index > this.$store.state.tabMask){
        this.$store.commit('subTab', index-1)
      }
      else {
      this.$store.commit('subTab', index-1)
      this.$store.commit('changeTabMask',this.$store.state.tabMask-1)
      }
    }
  }
}
</script>

<style scoped lang="less">
.tabs {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #ccc;
  padding-left: 5px;
  cursor: pointer;
  overflow: auto;
  margin-bottom: 5px;
  .el-tag {
    user-select: none;
    &.tag-active {
      color: white;
      border: 1px solid #409eff;
      background-color: #409eff;
      i::before {
        color: white;
        background-color: white;
      }
    }
  }
}
</style>