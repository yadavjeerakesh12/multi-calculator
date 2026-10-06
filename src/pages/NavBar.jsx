
import { Link } from "react-router-dom";
export default function NavBar({ use ,handleLogout }) {
    return (
        <>
            <div className="bg-cyan-500 p-2 flex justify-between flex-wrap font-serif lg:text-3xl sm:text-xl">
                <div>
                    <h1>Calculator</h1>
                </div>
                <div className="flex justify-around items-center gap-5 ">
                    <Link className="hover:underline hover:text-emerald-700" to="/">Home</Link>
                    <Link className="hover:underline hover:text-green-400" to="/about">About</Link>
                    <Link className="hover:underline hover:text-emerald-900" to="/contact">Contact</Link>
                    {/* <Link className="hover:underline hover:text-red-900" to="/contact">Profile</Link> */}
                    <p className="hover:underline hover:text-emerald-900">
                        {use ? (
                            <button
                                onClick={handleLogout}
                                className="hover:text-red-600"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                className="hover:underline hover:text-emerald-900"
                                to="/login"
                            >
                                Login
                            </Link>
                        )}
                    </p>
                    
                    {/* {use.name} */}
                </div>
            </div>
        </>
    )
}
