import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../store'
import { logout } from '../../store/authSlice'



const Navbar = () => {
    
    const { userToken, userType } = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Publications App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        {
                userToken && userType === 'PUBLISHER' && (
                    <li className="nav-item">
                        <Link className="nav-link" to="/add-publication">Create</Link>
                    </li>
                )
            }
                        {
                            !userToken ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                </>
                            ) : (
                                    <li className="nav-item">
                                        <a 
                                            className="nav-link" 
                                            style={{ color: "red" }}
                                            onClick={() => dispatch(logout())}
                                        >
                                            Logout
                                        </a>
                                    </li>
                            )
                        }
                    </ul>
                  
                </div>
            </div>
        </nav>
    )
}

export default Navbar