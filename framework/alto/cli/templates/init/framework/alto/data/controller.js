import internalStore from "./internal_store";
import CoreObject from "../foundation/core_object";

let Controller = function (data) {
    data = CoreObject.create(data);
    delete data.get;
    delete data.set;

    let guid = data.guid;

    if (internalStore.get([guid])) {
        throw new Error(`Controller with id: ${guid} already exists within application datastore`)
    }

    let controller = {
        data,
        reducer: (state, payload) => {
            if (payload.length >= 0) {
                if (!payload.collection) {payload = {collection: payload}};

                let data = Object.assign([], payload.collection);

                return Object.assign({}, state, {collection: data});
            } else {
                if (!payload.collection) {payload = {collection: {...payload}}};

                let data = Object.assign({}, state.collection, payload.collection);

                return Object.assign({}, state, {collection: data});
            }

        },
        setState(action) {
            this.data = this.reducer(this.data, action);
            this.setters.forEach(setter => setter(this.data));
        },
        setters: []
    };

    controller.setState = controller.setState.bind(controller);

    internalStore.set([guid], controller);
    return controller;
};

export default Controller;