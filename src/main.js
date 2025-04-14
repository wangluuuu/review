import {createApp} from 'vue'
import App from '@/App.vue'
import TestComponent from "@/components/TestComponent.vue";

const app1 = createApp(App)
app1.mount('#app')

const app2 = createApp(TestComponent)
app2.mount('#test')

//定义一个应用级的错误处理器，用来捕获所有子组件上的错误
app1.config.errorHandler = (err) => {
    console.log(err)
}

//注册应用范围内可用的资源
app1.component()
