import dummyClient from "../../../APIs/dummy";
import { USER_PROFILE_SET_DATE_BIRTH, USER_PROFILE_SET_EMAIL, USER_PROFILE_SET_ERROR_MESSAGE, USER_PROFILE_SET_GENDER, USER_PROFILE_SET_HANDPHONE_NUMBER, USER_PROFILE_SET_NAME, USER_PROFILE_START_LOADING, USER_PROFILE_STOP_LOADING } from "../actionType";

const setName = name => {
    return {
        type: USER_PROFILE_SET_NAME,
        payload: {
            name: name,
        },
    };
};

const setDateBirth = dateBirth => {
    return {
        type: USER_PROFILE_SET_DATE_BIRTH,
        payload: {
            dateBirth: dateBirth,
        },
    };
};

const setHandphoneNumber = handphoneNumer => {
    return {
        type: USER_PROFILE_SET_HANDPHONE_NUMBER,
        payload: {
            handphoneNumer: handphoneNumer,
        },
    };
};

const setGender = gender => {
    return {
        type: USER_PROFILE_SET_GENDER,
        payload: {
            gender: gender,
        },
    };
};

const setEmail = email => {
    return {
        type: USER_PROFILE_SET_EMAIL,
        payload: {
            email: email,
        },
    };
};

const setErrorMessage = errorMessage => {
    return {
        type: USER_PROFILE_SET_ERROR_MESSAGE,
        payload: {
            errorMessage: errorMessage,
        },
    };
};

const startLoading = () => {
    return {
        type: USER_PROFILE_START_LOADING,
    };
};

const stopLoading = () => {
    return {
        type: USER_PROFILE_STOP_LOADING,
    };
};

const updateUser= (name, dateBirth, handphoneNumber, gender, email) => async dispatch => {
    try{
        console.log("updateting user data...");
        dispatch(startLoading());

        const submitData2 = {
            name: name,
            date_birth: dateBirth,
            handphone_number: handphoneNumber,
            Gender: gender,
            email: email,
        };

        const userUpdated = await dummyClient({
            method: "PUT",
            url: "/users",
            data: submitData2,
        });

        console.log(userUpdated)

        dispatch(setName(userUpdated.response.data.nama))
        dispatch(setDateBirth(userUpdated.response.data.tanggal_lahir))
        dispatch(setHandphoneNumber(userUpdated.response.data.nomor_handphone))
        dispatch(setGender(userUpdated.response.data.jenis_kelamin))
        dispatch(setEmail(userUpdated.response.data.email))

        dispatch(stopLoading());
    } catch (error) {
        console.log(error.response)
        dispatch(setErrorMessage(error.response));
        dispatch(stopLoading())
    }
}

const showUserDetail = () => async dispatch =>{
    try {
        console.log("fetch user data...");
        dispatch(startLoading());

        const userDetailData = await dummyClient({
            method: "GET",
            url: "/users",
        });
           
        dispatch(setName(userDetailData.response.data.nama))
        dispatch(setDateBirth(userDetailData.response.data.tanggal_lahir))
        dispatch(setHandphoneNumber(userDetailData.response.data.nomor_handphone))
        dispatch(setGender(userDetailData.response.data.jenis_kelamin))
        dispatch(setEmail(userDetailData.response.data.email))

        dispatch(stopLoading());
    } catch (error) {
        console.log(error.response)
        dispatch(stopLoading())
    }
}

const userProfileAction = {
    setEmail,
    setDateBirth,
    setGender,
    setHandphoneNumber,
    setName,
    updateUser,
    showUserDetail,
}

export default userProfileAction;
