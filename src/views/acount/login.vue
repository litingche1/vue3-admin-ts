<template>
    <div id="acount">
        <div class="form-wrap">
            <a-form
                    name="custom-validation"
                    ref="ruleForm"
            >
                <a-form-item>
                    <label for="">用户名</label>
                    <a-input type="password" autocomplete="off"/>
                </a-form-item>
                <a-form-item class="password">
                    <label for="">密码</label>
                    <a-input type="password" autocomplete="off"/>
                </a-form-item>
                <!--                <a-form-item name="age">-->
                <!--                    <div id="captcha-dom" class="nc-container"></div>-->
                <!--                </a-form-item>-->
                <a-form-item class="yzm">
                    <div id="captcha-dom" class="nc-container"></div>
                    <!--No-Captcha渲染的位置，其中 class 中必须包含 nc-container-->
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" block>
                        登录
                    </a-button>
                </a-form-item>
            </a-form>
            <div class="text-center fs-12">
                <a href="" class="color-white">忘记密码</a> |
                <a href="" class="color-white">注册</a>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import { defineComponent,reactive, onMounted } from "vue";
    // import "./captcha.js";
    export default defineComponent({
        name: "login",
        setup(props) {
            console.log(props)
            const fromConfig = reactive<any>({
                layout: {
                    labelCol: {span: 4},
                    wrapperCol: {span: 14},
                },

            })
            onMounted(() => {

            })
            return {
                fromConfig
            }
        }
    });
</script>
<style lang="scss">
    #acount {
        width: 100%;
        /*height: 900px;*/
        height: 100%;
        background: #282828;

        .form-wrap {
            width: 285px;
            color: #fff;
            margin: 0 auto;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            /*border: 1px solid red;*/

            label {
                display: block;
                color: #fff;
                font-size: 14px;
            }

            .ant-col {
                width: 100%;
            }

            .password {
                margin-top: -15px;
            }

            .yzm {
                margin-bottom: 25px;
                margin-top: 20px;
            }

            .nc-container #nc_1_wrapper {
                width: 100%;
            }

            .nc-container .nc_scale span {
                height: 34px;
            }
        }
    }

    </style>