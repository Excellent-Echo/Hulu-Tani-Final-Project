import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import catalogAction from "../../../redux/public/catalog/catalogAction"

const SearchBar = ()=>{
    const search = useSelector(state => state.catalogProduct)
    const dispatch = useDispatch()
    const history = useHistory()

    const searchHandler = (e)=>{
        e.preventDefault()
        dispatch(catalogAction.getSearchedProducts(search.searchKey, history))
    }

    return (
        <form class="d-flex justify-content-center" onSubmit={searchHandler}>
            <input 
            class="form-control 
            userpages w-100" 
            type="search" 
            placeholder="Cari produk" 
            aria-label="Search" 
            value={search.searchKey} 
            onChange={e => dispatch(catalogAction.setSearchKey(e.target.value))}
            />
        </form>
    )
}

export default SearchBar