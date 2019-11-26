import Toast from "./Toast";

const ToastPlugin = {

    install(Vue,options) {

        // Toast 挂载到 div 上面  Toast Template 会替换 div
        Toast.template = "<div><div>";

        // 使用基础 Vue 构造器，创建一个子类 参数是一个包含组件选项的对象。
        let toastConstructor = Vue.extend(Toast);

        // 开始挂载  挂载成功 就会有Vue组件属性
        let component = new toastConstructor().$mount();

        // 添加到 dom 中
        document.documentElement.appendChild(component.$el)

        Vue.prototype.$toast = component;
    }
};

export default ToastPlugin;