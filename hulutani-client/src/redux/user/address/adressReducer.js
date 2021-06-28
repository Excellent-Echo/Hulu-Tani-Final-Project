const initialState =  {
    id:0,
    cityId:0,
    nama:"",
    telepon:"",
    alamatLengkap:"",
    kota:"",
    provinsi:"",
    daftarAlamat:[],
    daftarKota:[],
    daftarProvinsi:[]
}

const addressReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADDRESS_SET_NAMA":
            return {
                ...state,
                nama: action.payload.nama
            }
        case "ADDRESS_SET_TELEPON":
            return {
                ...state,
                telepon: action.payload.telepon
            }
        case "ADDRESS_SET_ALAMAT_LENGKAP":
            return {
                ...state,
                alamatLengkap: action.payload.alamatLengkap
            }
        case "ADDRESS_SET_KOTA":
            return {
                ...state,
                kota: action.payload.kota
            }
        case "ADDRESS_SET_PROVINSI":
            return {
                ...state,
                provinsi: action.payload.provinsi
            }
        case "ADDRESS_SET_DAFTAR_ALAMAT":
            return {
                ...state,
                daftarAlamat: action.payload.daftarAlamat
            }
        case "ADDRESS_SET_DAFTAR_KOTA":
            return {
                ...state,
                daftarKota: action.payload.daftarKota
            }
        case "ADDRESS_SET_DAFTAR_PROVINSI":
            return {
                ...state,
                daftarProvinsi: action.payload.daftarProvinsi
            }
        case "ADDRESS_SET_ID":
            return {
                ...state,
                id: action.payload.id
            }
        case "ADDRESS_SET_CITY_ID":
            return {
                ...state,
                cityId: action.payload.cityId
            }
        case "ADDRESS_RESET_FORM":
            return {
                ...state,
                nama:"",
                telepon:"",
                alamatLengkap:"",
                kota:"",
                provinsi:"",
            }
        default:
            return state;
    }
}

export default addressReducer