import Router from "../../framework/alto/routing/router";
import Home from "../ui/views/home_view";

let router = Router.create({

    routes: {

        index: {
            component: Home
        }

    }

});

export default router;