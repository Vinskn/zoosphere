import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-red-500 font-highMount text-center text-7xl">Error</h1>
            <h1 className="text-center text-red-500 font-bold text-4xl">Account not Authorized</h1>
    
            <Link className="flex justify-center mt-5 bg-red-400 w-1/2 mx-auto rounded-lg hover:bg-red-700" to={'/'}>Back To Home</Link>
            
        </div>
    )
}

export default ErrorPage;