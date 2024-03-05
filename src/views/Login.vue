<template>
    <div class="wrapper">
        <el-form :model="form" :rules="rules" label width=" 80px" label-position="top" class="login-box" status-icon
            style="background-color: #fff;border-radius: 10px;position: relative;top:200px" ref="loginForm">
            <h3 class="login-title">欢迎登录</h3>
            <el-form-item label="用户名" prop="username" label-width="100px" >
                <el-input  type="text" placeholder=" 请输入账号" v-model="form.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password" label-width="100px">
                <el-input  type="password" placeholder=" 请输入密码" v-model="form.password" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="login-btn" v-on:click="onSubmit('loginForm')">登录</el-button>
            </el-form-item>
            <div class="login-tip">还没有帐号了？<span @click="$router.push('/register')">马上注册</span></div>
        </el-form>
        <el-dialog title="温馨提示" v-model="dialogVisible" width="30%">
            <span>用户名和密码不能为空</span>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="dialogVisible = false">
                        确 定
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>
<script>
import { post, get } from '@/utils/http.js'
export default {
    name: "Login",
    data() {
        return {
            form: {
                username: 'admin',
                password: null
            },
            // 表单验证， 需要在el-form-item- 元素中增加prop属性
            rules: {
                username: [{ required: true, message: '账号不可为空', trigger: 'blur' }],
                password: [{ required: true, message: '密码不可为空', trigger: 'blur' }]
            },
            //对话框显示和隐藏
            dialogVisible: false
        }
    },
    methods: {
        onSubmit(formName) {
            //为表单绑定验证功能
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    post({ url: 'http://106.55.188.14/api/login', data: { name: this.form.username, password: this.form.password } })
                        .then(res => {
                            if (res.result.code === 1) {
                                this.$router.push('/')
                                
                            }else{
                                ElNotification({
                                    message: '密码错误',
                                    type: 'error',
                                })
                            }
                        })
                } else {
                    this.dialogVisible = true;
                    return false;
                }
            });
        },
    }
}
</script>
<style scoped>
.wrapper {
    height: 100vh;
    background-image: linear-gradient(to bottom right, #FC466B, #3F5EFB);
    overflow: hidden;
}

.login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 50px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
}

.login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
}

.login-tip{
    color: #606266;
    font-size: 13px;
}
.login-tip span{
    cursor: pointer;
    color: #409eff;
}
.login-btn{
    width: 278px;
    margin: 10px auto 0;
}
</style>
