import {useEffect, useState} from 'react';

function controllerBinding(controller) {
    const [ state, set ] = useState(controller.data);

    useEffect(() => () => {
        controller.setters = controller.setters.filter(setter => setter !== set)
    }, []);

    if (!controller.setters.includes(set)) {
        controller.setters.push(set);
    }

    return [ state, controller.setState ];
};

export default controllerBinding;