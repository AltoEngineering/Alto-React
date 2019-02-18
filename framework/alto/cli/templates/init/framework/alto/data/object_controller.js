import internalStore from "./internal_store";
import CoreObject from "../foundation/core_object";

let ObjectController = function (data) {
    data = CoreObject.create(data);
    delete data.get;
    delete data.set;

    let guid = data.guid;

    if (internalStore.get([guid])) {
        throw new Error(`Controller with id: ${guid} already exists within application datastore`)
    }

    // generate an instance of the controller //
    let objectController = {

        data,

        setters: [],

        reducer: (controller, payload) => {
            if (!payload.data) {payload = {data: {...payload}}};

            // merge the current state of controller.data w/ payload.data //
            let mergedData = Object.assign({}, controller.data, payload.data);

            // now update the current state of controller.data w/ the merged data
            return Object.assign({}, controller, {data: mergedData});
        },

        setState(action) {
            this.data = this.reducer(this.data, action);
            this.setters.forEach(setter => setter(this.data));
        }

    };

    objectController.setState = objectController.setState.bind(objectController);

    // update the internalStore
    internalStore.set([guid], objectController);

    return objectController;
};

export default ObjectController;