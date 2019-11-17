// 函数防抖
export function debounce(fun,delay = 50) {

    let timer = null;

    return function (...args) {

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(()=>{

            fun.apply(this, args);

        }, delay);
    }

};

// 日期转换工具类  yyyy-MM-dd HH:mm:ss
export function formateDate(date,formate) {
    // 匹配年份
    if (/(y+)/.test(formate)) {
        // 替换年份   'yyyy-MM-ss'.replace('yyyy','2019')
        formate = formate.replace(RegExp.$1,(date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    let obj = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "H+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
    };
    // 匹配其他
    for(let key in obj){

        if (new RegExp(`(${key})`).test(formate)) {

            formate = formate.replace(RegExp.$1,padLeft(obj[key]));
        }
    }

    function padLeft(number) {
        return number < 10 ? "0" + number : number;
    }

    return formate;
}
