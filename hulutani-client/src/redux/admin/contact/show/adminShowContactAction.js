import hulutaniClient from "../../../../APIs/hulutaniClient"

const getContacts = () => async dispatch => {
    try {
        console.log("getting contact")
        const token = localStorage.getItem("adminToken");
        const user = await hulutaniClient({
            method:"GET",
            url:"/kontak",
            headers: { Authorization: token },
        })

        dispatch({
            type:"ADMIN_SHOW_CONTACT",
            payload: user.data.data
        })
        dispatch(setAmount(user.data.data.length))
        console.log("get success")
    } catch (error) {
        console.log(error)
    }
}

const setAmount = (amount) =>{
    return {
        type:"ADMIN_SHOW_CONTACT_SET_AMOUNT",
        payload: amount
    }
}

const admiShowContactAction = {
    getContacts
}

export default admiShowContactAction;