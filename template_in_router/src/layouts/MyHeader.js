// import MyMenu from "./MyMenu";
// import MyBreadcrumb from "./MyBreadcrumb";

import MyMenu from "./MyMenu";
import MyBreadcrumb from "./MyBreadcrumb";

export default function MyHeader(props) {
    return (<>
        {/*<h1> My Header </h1>*/}

        {/*<MyMenu/>*/}
        {/*<MyBreadcrumb/>*/}
        <MyMenu byPropsPageName={props.byPropsPageName}/>
        <MyBreadcrumb byPropsPageName={props.byPropsPageName}/>
    </>)
}