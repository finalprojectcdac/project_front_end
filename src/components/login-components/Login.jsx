import React from 'react';

function Login() {
    return (
    <div className="login-page">
        <div className="form">
            <form className="login-form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>login</button>
            </form>
        </div>
    </div>
    );
}

export default Login;