<template>
<el-row :gutter="20">
  <el-col :span="8">
    <el-card shadow="hover">
      <div>
        <img src="@/assets/img/logo.png" alt="">
        <hr>
        <div class="user-info">
          <p class="name">Admin</p>
          <p class="access">超级管理员</p>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2022-09-13</span></p>
          <p>上次登录地点：<span>上海</span></p>
        </div>
      </div>
    </el-card>
    <el-card>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="100"></el-table-column>
        <el-table-column prop="name" label="姓名" width="100"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </el-card>
  </el-col>
  <el-col :span="16">
    <el-row :gutter="10">
      <el-col :span="8" v-for="item in cardData">
        <div class="num" >
          <el-card :body-style="{display: 'flex', padding: 0}">
            <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color}"></i>
            <div class="detail">
              <p class="num-price">&yen;{{item.value}}</p>
              <p class="num-title">{{item.name}}</p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <LineChart></LineChart>
    <el-row :gutter="20">
      <el-col :span="12">
        <bar-chart></bar-chart>
      </el-col>
      <el-col :span="12">
        <pie-chart></pie-chart>
      </el-col>
    </el-row>
  </el-col>
</el-row>
</template>

<script>
import LineChart from "@/views/home/LineChart";
import BarChart from "@/views/home/BarChart";
import PieChart from "@/views/home/PieChart";

export default {
  name: "Home",
  data() {
    return {
      tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
      ],
      cardData: [
        {
          name: "今日支付订单",
          value: "1234",
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "今日收藏订单",
          value: "210",
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "今日未支付订单",
          value: "1234",
          icon: "s-goods",
          color: "#5ab1ef"
        },
        {
          name: "本月支付订单",
          value: "1234",
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "本月收藏订单",
          value: "210",
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "本月未支付订单",
          value: "1234",
          icon: "s-goods",
          color: "#5ab1ef"
        },
      ]
    }
  },
  components: {
    LineChart,
    BarChart,
    PieChart
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
.el-card {
  position: relative;
  margin-bottom: 10px;
  img {
    width: 100px;
    height: 100px;
  }
  .user-info {
    position: absolute;
    top: 50px;
    left: 200px;
    .name {
      font-size: 30px;
    }
    .access {
      font-size: 12px;
      color: rgba(147,147,147, .7);
    }
  }
  .login-info {
    margin-top: 20px;
    font-size: 12px;
    color: rgba(83,83,83, .7);
    p {
      margin-bottom: 10px;
    }
    span {
      margin-left: 50px;
      color: #333;
    }
  }
}
.num {
  .icon {
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 20px;
    padding-top: 15px;
    color: white;
  }
  .detail {
    padding-left: 20px;
    padding-top: 5px;
    .num-price {
      font-size: 20px;
    }
    .num-title {
      font-size: 12px;
      color: rgba(147,147,147, .7);
    }
  }
}
</style>