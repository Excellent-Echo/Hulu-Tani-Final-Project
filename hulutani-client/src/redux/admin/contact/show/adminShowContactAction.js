import hulutaniClient from "../../../../APIs/hulutaniClient"

const getContacts = () => async dispatch => {
    try {
        console.log("getting contact")

        const user = await hulutaniClient({
            method:"GET",
            url:"/kontak"
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