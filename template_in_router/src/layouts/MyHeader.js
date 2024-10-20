// import MyMenu from "./MyMenu";
// import MyBreadcrumb from "./MyBreadcrumb";

import MyMenu from "./MyMenu";

export default function MyHeader() {
    return (<>
        {/*<h1> My Header </h1>*/}

        <MyMenu/>

        {/*<MyMenu byPropsPageName={props.byPropsPageName}/>*/}
        {/*<MyBreadcrumb byPropsPageName={props.byPropsPageName}/>*/}
    </>)
}