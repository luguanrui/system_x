<template>
  <div class="sys-login-wrapper">
    <h1 class="title">济南轨道交通R1线演马庄西站绿色施工BIM管控平台</h1>
    <div class="sys-login">
      <div class="sys-login-form">
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="name" class="input-style">
            <el-input v-model="ruleForm2.name" autocomplete="off" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" class="input-style">
            <el-input
              type="password"
              v-model="ruleForm2.password"
              autocomplete="off"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="verify" class="input-style">
            <el-input
              v-model.number="ruleForm2.verify"
              placeholder="请输入验证码"
              style="width: 173px;vertical-align: top"
            ></el-input>
            <image-verify @imgCode="imgCode" ref="imgVerify" class="image-verify--content"></image-verify>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import imageVerify from "@/components/img-verify";

import { setCookie } from "utils-library";

export default {
  components: { imageVerify },
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var checkPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var checkVerify = (rule, value, callback) => {
      console.log(this.ruleForm2.code);

      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (value !== this.ruleForm2.code) {
        callback(new Error("验证码输入有误"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        name: "",
        password: "",
        verify: "",
        code: ""
      },
      rules2: {
        name: [{ validator: checkName, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }],
        verify: [{ validator: checkVerify, trigger: "blur" }]
      }
    };
  },
  methods: {
    imgCode(code) {
      this.ruleForm2.code = code;
    },
    handleClick() {
      this.$refs.imgVerify.draw();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$Message.success("登录成功");
          setCookie("user", this.ruleForm2.name);
          this.$router.push({ path: "/project-profile" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
