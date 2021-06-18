import hulutaniClient from "../../../APIs/hulutaniClient";
import dummyClient from "../../../APIs/dummy";
import { USER_REGISTER_RESET_FORM, USER_REGISTER_SET_DATE_BIRTH, USER_REGISTER_SET_EMAIL, USER_REGISTER_SET_ERROR_MESSAGE, USER_REGISTER_SET_GENDER, USER_REGISTER_SET_HANDPHONE_NUMBER, USER_REGISTER_SET_NAME, USER_REGISTER_SET_PASSWORD, USER_REGISTER_SET_SUCCES_MESSAGE, USER_REGISTER_START_LOADING, USER_REGISTER_STOP_LOADING } from "../actionType";

const resetForm = () => {
    return {
        type: USER_REGISTER_RESET_FORM
    };
};

const setName = name => {
    return {
        type: USER_REGISTER_SET_NAME,
        payload: {
            name: name,
        },
    };
};

const setDateBirth = dateBirth => {
    return {
        type: USER_REGISTER_SET_DATE_BIRTH,
        payload: {
            dateBirth: dateBirth,
        },
    };
};

const setHandphoneNumber = handphoneNumer => {
    return {
        type: USER_REGISTER_SET_HANDPHONE_NUMBER,
        payload: {
            handphoneNumer: handphoneNumer,
        },
    };
};

const setGender = gender => {
    return {
        type: USER_REGISTER_SET_GENDER,
        payload: {
            gender: gender,
        },
    };
};

const setEmail = email => {
    return {
        type: USER_REGISTER_SET_EMAIL,
        payload: {
            email: email,
        },
    };
};

const setPassword = password => {
    return {
        type: USER_REGISTER_SET_PASSWORD,
        payload: {
            password: password,
        },
    };
};

const setErrorMessage = errorMessage => {
    return {
        type: USER_REGISTER_SET_ERROR_MESSAGE,
        payload: {
            errorMessage: errorMessage,
        },
    };
};

const setSuccessMessage = successMessage => {
    return {
        type: USER_REGISTER_SET_SUCCES_MESSAGE,
        payload: {
            successMessage: successMessage,
        },
    };
};

const startLoading = () => {
    return {
        type: USER_REGISTER_START_LOADING,
    };
};

const stopLoading = () => {
    return {
        type: USER_REGISTER_STOP_LOADING,
    };
};

const registerUser = (name, dateBirth, handphoneNumber, gender, email, password) => async dispatch =>{
    try {
        console.log("create user...");
        dispatch(startLoading());
        dispatch(setSuccessMessage(""));
        dispatch(setErrorMessage(""));

        // const submitData = {
        //     nama: name,
        //     tanggal_lahir: dateBirth,
        //     nomor_handphone: handphoneNumber,
        //     jenis_kelamin: gender,
        //     email: email,
        //     password: password,
        // };

        const submitData2 = {
            name: name,
            date_birth: dateBirth,
            handphone_number: handphoneNumber,
            Gender: gender,
            email: email,
            password: password,
        };

        // const userRegister = await hulutaniClient({
        //         method: "POST",
        //         url: "/user/register",
        //         data: submitData,
        // });

        const userRegister = await dummyClient({
            method: "POST",
            url: "/users",
            data: submitData2,
        });
        console.log(userRegister)

        dispatch(setSuccessMessage("Create user success"));
        dispatch(stopLoading());

    } catch (error) {
        console.error(error.response);
        dispatch(setErrorMessage(Error.response));
        dispatch(stopLoading())
    }
}

const userRegisterAction = {
    setName,
    setDateBirth,
    setHandphoneNumber,
    setGender,
    setEmail,
    setPassword,
    registerUser,
    resetForm,
}

export default userRegisterAction;