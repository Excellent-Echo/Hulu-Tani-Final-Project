import React from "react"
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import catalogAction from "../../../redux/public/catalog/catalogAction";

const CategoryHeader = ()=> {
    const adminShowCategory = useSelector(
        (state) => state.adminShowCategory.categories
      );
    const dispatch= useDispatch()
    const history = useHistory()
    const clickHanlder =(id)=>{
        dispatch(catalogAction.getFilterdProductsByCategory(id))
        history.push(`/products`)
    }

    return(
        <div className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Kategori
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        {adminShowCategory.map((data, index) => {
            return (
            <li key={index} className="dropdown-item" onClick={()=>clickHanlder(data.id)}>
                {data.nama}
            </li>
            );
        })}
        </ul>
    </div>
    )
}

export default CategoryHeader