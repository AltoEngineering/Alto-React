import React from "react";
import LabelView from "../../../framework/alto/ui/label_view";
import MessageController from "../../controllers/message_controller";
import controllerBinding from "../../../framework/alto/data/controller_binding";

let Hello = () => {
    let [messageController] = controllerBinding(MessageController);
    let {greating} = messageController.data;

    return (
        <LabelView title={greating} />
    )

};

export default Hello;

