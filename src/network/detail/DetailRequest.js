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

        this.oldPrice = itemInfo.oldPrice;

        this.price = itemInfo.price;

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