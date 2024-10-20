import MyHeader from "./MyHeader";
import MyContact from "./MyContacts";
import MyFooter from "./MyFooter";
import {Outlet} from "react-router-dom";

export default function MainLayout (props) {
    return(
        <>
            {/*<h1> Main Layout</h1>*/}
            {/*<MyHeader/>*/}
            <MyHeader byPropsPageName={props.byPropsPageName} />

            <Outlet />

            <MyContact />
            <MyFooter />

            {/*<MyHeader byPropsPageName={props.byPropsPageName} />*/}


        </>
    )
}