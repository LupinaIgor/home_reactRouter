import MyHeader from "./MyHeader";
import MyContact from "./MyContacts";
import MyFooter from "./MyFooter";
import {Outlet} from "react-router-dom";

export default function MainLayout () {
    return(
        <>
            {/*<h1> Main Layout</h1>*/}
            <MyHeader/>

            <Outlet />

            <MyContact />
            <MyFooter />

            {/*<MyHeader byPropsPageName={props.byPropsPageName} />*/}


        </>
    )
}