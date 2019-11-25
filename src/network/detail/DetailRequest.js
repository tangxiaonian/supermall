import {request} from "../request";

export function requestDetailInfo(params,success,error) {

    request({
        url:"/detail",
        params,
        method:"get"
    }, success, error);

}

// GoodBaseInfo 对象
export class GoodBaseInfo {

    constructor(columns,itemInfo,services) {

        this.columns = columns;

        this.services = services;

        this.title = itemInfo.title;

        this.desc = itemInfo.desc;

        this.oldPrice = itemInfo.oldPrice;

        this.price = itemInfo.price;

        this.realPrice = itemInfo.lowPrice;

        this.discountDesc = itemInfo.discountDesc;

    }

}
// ShopInfo 对象
export class ShopInfo {

    constructor(shopInfo) {

        this.name = shopInfo.name;

        this.score = shopInfo.score;

        this.shopLogo = shopInfo.shopLogo;

        this.cSells = shopInfo.cSells;

        this.cGoods = shopInfo.cGoods;

    }

}

// 推荐商品展示
export function getRecommend(success,error) {

    request({
        url: "/recommend"
    },success,error);

}