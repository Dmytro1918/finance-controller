import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError() as ({message?:string, statusText?:string});
    console.log(error);
    
    return (
        <>
            <div>
                <h2>
                    Ooooops there is an error.
                </h2>
            </div>
            <p>
                <i> {error.message || error.statusText}</i>
            </p>
        </>
    )
}


export default ErrorPage