import {request} from "../request.js";

export function requestCategoryMenu(success,fail) {
    request({
        url:"/category"
    }, success, fail);
}

// http://106.54.54.237:8000/api/v1/subcategory?maitKey=3627
export function requestCategoryGrid(params,success,fail) {
    request({
        url:"/category",
        params:{
            maitKey:""
        }
    }, success, fail);
}

// http://106.54.54.237:8000/api/v1/subcategory/detail?miniWallkey=10062603&type=pop
export function requestCategoryList(params,success,fail) {
    request({
        url:"/category",
        params:{
            miniWallkey:"",
            type:""
        }
    }, success, fail);
}