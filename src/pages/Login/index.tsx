import { Link } from "react-router-dom";

function Login() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleLogin = () => {
        // handle login logic
    };

    return (
        <div className="container">
            <h1 className="title">Login</h1>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="email" placeholder="Enter your email" required pattern={emailRegex.toString()} />
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input className="input" type="password" placeholder="Enter your password" required />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-primary" onClick={handleLogin}>Login</button>
                </div>
            </div>
            <Link to="/home">Home</Link>
        </div>
    );
}

export default Login;