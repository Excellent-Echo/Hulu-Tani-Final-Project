import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import userRegisterAction from '../redux/user/register/userRegisteAction';

const RegisterSample = () => {
    const userRegisterData = useSelector(state => state.userRegister);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(userRegisterAction.resetForm());
    }, [])

    const registerSubmitHandler = e =>{
        e.preventDefault();
        dispatch(userRegisterAction.registerUser(
            userRegisterData.name,
            userRegisterData.dateBirth,
            userRegisterData.handphoneNumber,
            userRegisterData.Gender,
            userRegisterData.email,
            userRegisterData.password
        ))
    }

    return (
        <div>
            <h1>Register sample</h1>
            <form onSubmit={registerSubmitHandler}>
                <div>
                    <label htmlFor="">nama</label>
                    <input type="text" 
                    value={userRegisterData.name} 
                    onChange={e => dispatch(userRegisterAction.setName(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="">tanggal lahir</label>
                    <input type="date" 
                    value={userRegisterData.dateBirth} 
                    onChange={e => dispatch(userRegisterAction.setDateBirth(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="">nomor handphne</label>
                    <input type="text" 
                    value={userRegisterData.handphoneNumber} 
                    onChange={e => dispatch(userRegisterAction.setHandphoneNumber(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="">jenis kelamin</label>
                    <input type="text" 
                    value={userRegisterData.Gender} 
                    onChange={e => dispatch(userRegisterAction.setGender(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="">email</label>
                    <input type="email" 
                    value={userRegisterData.email} 
                    onChange={e => dispatch(userRegisterAction.setEmail(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="">password</label>
                    <input type="password" 
                    value={userRegisterData.password} 
                    onChange={e => dispatch(userRegisterAction.setPassword(e.target.value))}/>
                </div>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default RegisterSample;
