import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import userLoginAction from '../redux/user/login/userLoginAction';

const RegisterSample = () => {
    const userLoginData = useSelector(state => state.userLogin);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(userLoginAction.resetForm());
    }, [])

    const loginSubmitHandler = e =>{
        e.preventDefault();
        dispatch(userLoginAction.loginUser(
            userLoginData.email,
            userLoginData.password
        ))
    }

    return (
        <div>
            <h1>Login sample</h1>
            <form onSubmit={loginSubmitHandler}>
                <div>
                    <label htmlFor="">email</label>
                    <input type="email" 
                    value={userLoginData.email} 
                    onChange={e => dispatch(userLoginAction.setEmail(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="">password</label>
                    <input type="password" 
                    value={userLoginData.password} 
                    onChange={e => dispatch(userLoginAction.setPassword(e.target.value))}/>
                </div>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default RegisterSample;
