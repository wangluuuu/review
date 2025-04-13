import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

//定义一个应用级的错误处理器，用来捕获所有子组件上的错误
app.config.errorHandler = (err) => {
    console.log(err)
}

//注册应用范围内可用的资源
app.component()
