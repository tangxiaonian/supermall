import {request} from "../request";

/*
    封装Home的数据请求发送层
 */

export function requestHome(success,fail) {
    request({
        url: "/home/multidata",
        methods: "get"
    }, success, fail);
}

// 请求首页tabController商品的数据
export function requestHomeGoods({type,page},success,fail) {

    request({

        url: `/home/data?type=${type}&page=${page}`,

        methods: "get"

    }, success, fail);

}