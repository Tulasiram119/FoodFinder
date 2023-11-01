import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();    
    return(
        <div>
            <h1>Oops!!!!!</h1>
            <h2>Something Went wrong !!!!</h2>
            <h1>{err.status}</h1>
            <h1>{err.statusText}</h1>
            <h1>{` rey idhi route kadhu ra rey ${err.data}`}</h1>
        </div>
    )
}
export default Error;