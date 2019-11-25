const state = {
    carts:[]
};

const mutations = {

    addCarts(state,payload) {
        state.carts.push(payload);
    },
    updateNumber(state,payload) {
        state.carts[payload.index].number++;
    }
};

const actions = {

    addCarts({state,commit},products) {

        let index = state.carts.findIndex((item) => {
            return item.iid === products.iid;
        });

        if (index < 0) {
            products.number = 1;
            commit("addCarts",products);
        }else {
            commit("updateNumber",{
                index
            });
        }
    }

};

export const cartModule = {
    namespaced: true,
    state,
    mutations,
    actions
};