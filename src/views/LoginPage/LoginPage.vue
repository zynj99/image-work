<template>
    <div class="loginPage">
        <header><van-icon name="arrow-left" /></header>
        <main>
            <div class="logo">
                <p>欢迎登录！</p>
                <span>远程医疗平台</span>
            </div>
            <div class="formBox">
                <div class="tel">
                    <img src="../../../static/img/login/tel.png" alt="">
                    <input type="text"  v-model="tel">
                </div>
                <div class="power">
                    <img src="../../../static/img/login/login-password.png" alt="">
                    <input type="password" v-model="password">
                </div>
                <div class="SlidCaptcha">
                    <drag-validate
                      v-model="validate"
                      :successFun="onSuccess"
                      :errorFun="onError"
                    ></drag-validate>
                </div>
                <van-button class="BUt" round type="info" @click="login">登录</van-button>
            </div>
            <div class="bottomImg"></div>
        </main>
    </div>
</template>
            
<script>
    import DragValidate from "./components/dragValidate/DragValidate"
    export default {
        components: {
            DragValidate
        },
        data() {
            return {
                tel:'',
                password: ''
            }
        },
        methods: {
            onSuccess() {
                this.validate = true;
            },
            onError() {},
            login:function () {
                this.$axios({
                    method:'post',
                    url:'/api/log',
                    data: {
                        phonenumber:this.tel,
                        password:this.password
                    }
                }).then((res) =>{          //这里使用了ES6的语法
                    console.log(res)       //请求成功返回的数据
                    if(res.data.code=='0'){
                        console.log(res.data.data)
                        this.$cookies.set('hCode', res.data.data);
                        this.$router.push({
                            name:'SearchPage',
                            /*params:{
                                'hosCode':res.data.data
                            }*/
                        })
                    }
                }).catch((error) =>
                    console.log(error)       //请求失败返回的数据
                )
            },
        }
    }
</script>

<style lang="scss" scoped>
   @import './LoginPage.scss';
</style>