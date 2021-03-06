const state = {
    carts:[]
};

const getters = {

    cartList(state) {
        return state.carts;
    }
};

const mutations = {

    // 添加购物车
    addCarts(state,payload) {

        payload.checked = true;

        state.carts.push(payload);

    },
    //更新数量
    updateNumber(state,payload) {

        state.carts[payload.index].number++;

    },
    // 改变选中状态
    changeSelectState(state,payload) {

        let index = state.carts.findIndex((item) => {

            return item.iid === payload.iid;

        });

        let checked = state.carts[index].checked;

        state.carts[index].checked = !checked;
    },
    // 全选
    selectAllShop(state) {

        state.carts.forEach((item) => {

            item.checked = !item.checked;

        });
    }
};

const actions = {

    addCarts({state,commit},products) {

        let index = state.carts.findIndex((item) => {

            return item.iid === products.iid;

        });

        return new Promise(((resolve, reject) => {

            if (index < 0) {

                products.number = 1;

                commit("addCarts",products);

                resolve("添加购物车成功!");

            }else {

                commit("updateNumber",{
                    index
                });

                resolve("新增商品数量+1!");

            }
        }));


    }

};

export const cartModule = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};