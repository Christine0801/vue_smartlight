<template>
<div class="login-container">
  <div class="brand-container">
    <el-row>
      <el-col :span="12" class="left" :class="{'active-rotate': mask}">
        <div class="cn">
          <span>劢</span>
          <span>上</span>
        </div>
        <div class="en">
          <span>M</span>
          <span>a</span>
          <span>s</span>
          <span>h</span>
          <span>e</span>
          <span>l</span>
          <span>l</span>
          </div>
      </el-col>
      <el-col :span="12" class="right">
        <div class="text">
          智能照明管理系统
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="form-container">
    <el-row>
      <el-col :span="12" class="left">
        <el-row>
          <el-col :span="20" class="form-control"
                  :class="{'active-text': controlUsername.text,
                  'active-border': controlUsername.border}"
          >
            <i class="el-icon-s-custom"></i>
            <input type="text" name="username"
                   @click="usernameClick"
                   @focus="usernameClick"
                   @blur="usernameBlur"
                   v-model="controlUsername.value"
            >
            <span>用户名</span>
          </el-col>
          <el-col :span="20" class="form-control"
                  :class="{'active-text': controlPassword.text,
                  'active-border': controlPassword.border}"
          >
            <i class="el-icon-lock"></i>
            <input type="password" name="password"
                   @click="passwordClick"
                   @focus="passwordClick"
                   @blur="passwordBlur"
                   v-model="controlPassword.value"
            >
            <span>密码</span>
          </el-col>
          <el-col :span="20" class="form-control"
                  :class="{'active-text': controlVerifyCode.text,
                  'active-border': controlVerifyCode.border}"
          >
            <i class="el-icon-place"></i>
            <input type="text" name="verifyCode" maxlength="6"
                   @click="verifyCodeClick"
                   @focus="verifyCodeClick"
                   @blur="verifyCodeBlur"
                   v-model="controlVerifyCode.value"
            >
            <img src="" alt="" title="看不起，换一张">
            <span>验证码</span>
          </el-col>
          <el-col :span="20" class="form-control">
            <button>登录系统</button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12" class="right">
        <img :src="imgUrl" alt="">
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      imgUrl: require('@/assets/img/bg_1.webp'),
      controlUsername: {
        text: false,
        border: false,
        value: ''
      },
      controlPassword: {
        text: false,
        border: false,
        value: ''
      },
      controlVerifyCode: {
        text: false,
        border: false,
        value: ''
      },
      brandLeft: false,
      timer: ''
    }
  },
  methods: {
    usernameClick() {
      this.controlUsername.text = true
      this.controlUsername.border = true
    },
    usernameBlur() {
      if (this.controlUsername.value.length == 0)
        this.controlUsername.text = false
      this.controlUsername.border = false
    },
    passwordClick() {
      this.controlPassword.text = true
      this.controlPassword.border = true
    },
    passwordBlur() {
      if (this.controlPassword.value.length == 0)
        this.controlPassword.text = false
      this.controlPassword.border = false
    },
    verifyCodeClick() {
      this.controlVerifyCode.text = true
      this.controlVerifyCode.border = true
    },
    verifyCodeBlur() {
      if (this.controlVerifyCode.value.length == 0)
        this.controlVerifyCode.text = false
      this.controlVerifyCode.border = false
    },
    brandAnimate() {
      this.brandLeft = !this.brandLeft
    }
  },
  computed: {
    mask() {
      return this.brandLeft
    }
  },
  mounted() {
    this.timer = setInterval(this.brandAnimate, 5000)
  }
}
</script>

<style scoped lang="less">
  .brand-container {
    .left,
    .right {
      position: relative;
      height: 100px;
    }
    .left {
      //perspective: 300px;
      //transform: rotateX(90deg);
      transform-style: preserve-3d;
      transition: all 1s;
      &.active-rotate {
        transform: rotateX(90deg);
      }
      .en,
      .cn {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        right: 0;
        width: 80%;
        height: 100px;
        text-align: center;
        span {
          display: block;
          flex: 1;
          color: rgb(64, 158, 255);
          font: 900 60px/100px '黑体';
        }
      }
      .cn {
        transform: translateZ(50px);
      }
      .en {
        transform: translateY(50px) rotateX(-90deg);

      }
    }
    .right .text {
      position: absolute;
      bottom: 30px;
      width: 100%;
      padding: 3px;
      color: white;
      font-size: 28px;
      padding-left: 10px;
      border-bottom: 2px solid white;
    }
  }
  .login-container {
    width: 100%;
    height: 100%;
    .brand-container,
    .form-container {
      border-radius: 40px;
      overflow: hidden;
    }
    .brand-container {
      position: absolute;
      top: 10%;
      left: 50%;
      width: 600px;
      height: 100px;
      transform: translate(-50%, -50%);
      background-color: #333333;
    }
    .form-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -35%);
      width: 800px;
      height: 400px;
      background-color: #fff;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, .3);
      .left,
      .right {
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .left {
        .el-row {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 25px;
          .form-control {
            position: relative;
            display: flex;
            align-items: center;
            width: 90%;
            height: 60px;
            border: 1px solid rgba(0, 0, 0, .3);
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3) {
              &.active-text span {
                transform: translate(-30px, -40px);
                width: 80px;
                height: 40px;
                line-height: 40px;
                font-size: 20px;
                color: #333333;
              }
              &.active-border {
                border: 2px solid mediumaquamarine;
              }
              i {
                position: absolute;
                left: 3px;
                font-size: 30px;
                color: #ccc;
              }
              input {
                width: 100%;
                height: 100%;
                border: 0;
                outline: 0;
                z-index: 1;
                background-color: transparent;
                padding-left: 40px;
                font-size: 20px;
              }
              span {
                position: absolute;
                left: 40px;
                display: block;
                width: 60px;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                transition: all .3s;
                color: rgba(0, 0, 0, .3);
              }
            }
            &:nth-child(3) img {
              width: 130px;
              height: 48px;
              cursor: pointer;
              margin-right: 3px;
            }
            &:nth-child(4) {
              border: 0;
              button {
                width: 100%;
                height: 100%;
                border: 0;
                border-radius: 0;
                color: white;
                font-size: 20px;
                cursor: pointer;
                background-color: rgb(64, 158, 255);
                &:active {
                  transform: scale(.9);
                }
              }
            }

          }
        }
      }
      .right img {
        width: 90%;
      }
    }
  }
</style>