
const setCart = cart =>{
    return {
        type:"ADD_CART_SET_CART",
        payload : cart
    }
}

const setQuantity = quantity =>{
    return {
        type:"ADD_CART_SET_QUANTITY",
        payload :{
            quantity: quantity
        }
    }
}

const setIdProduct = id =>{
    return {
        type:"ADD_CART_SET_QUANTITY",
        payload :{
            id: id
        }
    }
}

// const CART = {
//     KEY:"",
//     contents:[],
//     init(){
//         let _contents = localStorage.getItem(CART.KEY);
//         if(_contents){
//             CART.contents = JSON.parse(_contents)
//         }else{
//             CART.contents = [
//                 {id_produk:1, nama:"Bayam",qty:2,harga:3000},
//                 {id_produk:2, nama:"Bayim",qty:3,harga:4000},
//                 {id_produk:3, nama:"Bayum",qty:1,harga:5000}                    
//             ];
//             CART.sync(); 
//         }
//     },
//     async sync(){
//         let _cart = JSON.stringify(CART.contents);
//         await localStorage.setItem(CART.KEY,_cart)
//     },
//     find(id){
//         let match = CART.contents.filter(item=>{
//             if(item.id == id)
//                 return true;
//         });
//         if(match && match[0])
//             return match[0]
//     },
//     add(id){
//         if(CART.find(id)){
//             CART.increase(id,1)
//         }else{
//             const products = useSelector(state=> state.catalogProduct.allProduct)
//             let arr = products.filter(product =>{
//                 if(product.id_produk == id){
//                     return true;
//                 }
//             });
//             if(arr && arr[0]){
//                 let obj = {
//                     id_produk: arr.id_produk,
//                     nama: arr.nama,
//                     qty:1,
//                     harga:arr.harga
//                 };
//                 CART.contents.push(obj);
//                 CART.sync()
//             }else{
//                 console.log("error invalid product")
//             }
//         }
//     },
//     increase(id,qty=1){
//         CART.contents = CART.contents.map(item=>{
//             if(item.id_produk === id)
//                 item.qty = item.qty + qty;
//             return item
//         });
//         CART.sync()
//     },
//     reduce(id,qty=1){
//         CART.contents = CART.contents.map(item=>{
//             if(item.id_produk === id)
//                 item.qty = item.qty - qty;
//             return item
//         });
//         CART.contents.forEach(async item=>{
//             if(item.id_produk === id && item.qty === 0){
//                 await CART.remove(id)
//             }
//         });
//         CART.sync()
//     },
//     remove(id){
//         CART.contents = CART.contents.filter(item =>{
//             if(item.id_produk !==id){
//                 return true;
//             }
//             CART.sync()
//         })
//     },
//     empity(){
//         CART.contents = [];
//         CART.sync();
//     },
//     sort(nama="nama"){
//         let sorted = CART.contents.sort((a,b)=>{
//             if(a[nama] > b[nama]){
//                 return 1;
//             }else if(a[nama] <  b[nama]){
//                 return -1;
//             }else {
//                 return 0;
//             }
//         });
//         return sorted;
//     },
//     logContents(prefix){
//         console.log(prefix,CART.contents)
//     }
// }

const syncCart = (cart,key) => async dispatch =>{
    try {
        let _cart = JSON.stringify(cart);
        await localStorage.setItem(key,_cart)
    } catch (error) {
        console.log(error)
    }
}

const resetCart = () => {
    return {
        type: "RESET_CART"
    }
}

const findById = (id,cart)=>{
        let match = cart.filter(item =>{
        if(item.id == id)
            return true;
        });
        if(match && match[0])
            return match[0]
}

const increaseCart = (id,qty,cart) => async dispatch=>{
    const newcart = cart.map(item=>{
        if(item.id_produk === id)
            item.qty = item.qty + qty;
        return item
    });
    dispatch(setCart(newcart))
}

const reduceCart = (id,qty,cart) => async dispatch =>{
    const newcart = cart.map(item=>{
        if(item.id_produk === id)
            item.qty = item.qty - qty;
        return item
    });

    newcart.forEach(async item=>{
        if(item.id_produk === id && item.qty === 0){
            // await CART.remove(id)
        }
    });
}

const removeCart = (id,cart) => async dispatch =>{
    const newcart = cart.filter(item =>{
        if(item.id_produk !==id){
            return true;
        }
    })
    dispatch(setCart(newcart))
}

const addCart = (idProduct,nama,qty,harga,gambar) => async dispatch =>{
    try {
        
        let obj = {
            id_produk: idProduct,
            nama: nama,
            qty:qty,
            harga:harga*qty,
            gambar:gambar
        };

        //let arr = [obj,obj]
        // console.log(obj)
        // console.log(idProduct)
        dispatch(setCart(obj))
        dispatch(setIdProduct(idProduct))

    } catch (error) {
        console.log(error)
    }
}

const getCart = (key) => async dispatch =>{
    let cart = localStorage.getItem(key);
    dispatch(setCart(JSON.parse(cart)))
}

const cartAction = {
    // setIdProduct,
    setQuantity,
    addCart,
    syncCart,
    resetCart,
    findById,
    removeCart,
    increaseCart,
    reduceCart
}

export default cartAction