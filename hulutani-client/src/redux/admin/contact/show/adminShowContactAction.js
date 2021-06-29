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

        console.log("get success")
    } catch (error) {
        console.log(error)
    }
}

const admiShowContactAction = {
    getContacts
}

export default admiShowContactAction;