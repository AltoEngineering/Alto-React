import internalStore from "./internal_store";
import CoreObject from "../foundation/core_object";

let ArrayController = function (data) {
    data = CoreObject.create(data);
    delete data.get;
    delete data.set;

    let guid = data.guid;

    if (internalStore.get([guid])) {
        throw new Error(`Controller with id: ${guid} already exists within application datastore`)
    }

    // generate an instance of the controller //
    let arrayController = {

        data,

        setters: [],

        reducer: (controller, payload) => {
            /*
                if (!payload.data) {payload = {data: payload}};

                let data = Object.assign([], payload.data);

                return Object.assign({}, state, {data: data});
             */
            if (!payload.data) {payload = {data: payload}};

            // now update the current state of controller.data w/ the merged data
            return Object.assign({}, controller, {data: payload.data});
        },

        setState(action) {
            this.data = this.reducer(this.data, action);
            this.setters.forEach(setter => setter(this.data));
        }

    };

    arrayController.setState = arrayController.setState.bind(arrayController);

    // update the internalStore
    internalStore.set([guid], arrayController);

    return arrayController;
};

export default ArrayController;