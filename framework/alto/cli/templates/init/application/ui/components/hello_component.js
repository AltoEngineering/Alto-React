import React from "react";
import LabelView from "../../../framework/alto/ui/label_view";
import messageController from "../../controllers/message_controller";
import useController from "../../../framework/alto/data/useController";

let Hello = () => {
    let [messageData] = useController(messageController);

    return (
        <LabelView title={messageData.collection.greating} />
    )

};

export default Hello;

