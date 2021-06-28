import React from "react"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const CategoryHeader = ()=> {
    const adminShowCategory = useSelector(
        (state) => state.adminShowCategory.categories
      );

    return(
        <div class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Kategori
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        {adminShowCategory.map((data, index) => {
            return (
            <li key={index}>
                <Link class="dropdown-item" to={`/products`}>{data.nama}</Link>
            </li>
            );
        })}
        </ul>
    </div>
    )
}

export default CategoryHeader