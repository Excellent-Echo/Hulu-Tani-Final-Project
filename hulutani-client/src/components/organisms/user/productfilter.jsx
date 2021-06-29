import React from 'react'

import '../../../assets/css/productfilter.css'
import { useDispatch, useSelector } from 'react-redux';
import catalogAction from '../../../redux/public/catalog/catalogAction';

const ProductFilter = () => {
    const categories = useSelector(
        (state) => state.adminShowCategory.categories
      );
    const dispatch = useDispatch()

    return (
        <>
            <div className="container-fluid sidebar-container">
                <div className="container">
                    <div className="filter-sidebar-container">
                        <div className="row">
                            <div className="col-sm filter-sidebar">
                                <div class="accordion" id="accordionPanelsStayOpenExample">
                                    <div class="accordion-item">
                                        <div className="container-fluid sidebar-title d-flex justify-content-center">
                                            <h4 className="title text-center">
                                                <button class="title text-center" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    FILTER PRODUK
                                                </button>
                                            </h4>
                                        </div>
                                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
                                            <div className="container-fluid sidebar-content-container">
                                                <div className="row sidebar-content">
                                                    <div className="col-sm">
                                                        <div className="row filter">
                                                            <div className="col-sm">
                                                                <h6 className="accent-text accent-title">
                                                                    KATEGORI
                                                                </h6>
                                                                <ul className="list-unstyled">
                                                                    {categories.map((data,index)=>{
                                                                        return (
                                                                            <li key={index} onClick={()=>dispatch(catalogAction.getFilterdProductsByCategory(data.id))}>
                                                                                {data.nama}
                                                                            </li>
                                                                        )
                                                                    })}
                                                                    
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm">
                                                                <h6 className="accent-text accent-title">
                                                                    HARGA
                                                                </h6>
                                                                <ul className="list-unstyled">
                                                                    <li onClick={()=> dispatch(catalogAction.getFilterdProductsByPrice(0,50000))}>
                                                                       Rp 0 - Rp 50.000
                                                                    </li>
                                                                    <li onClick={()=> dispatch(catalogAction.getFilterdProductsByPrice(50000,100000))}>
                                                                        Rp 50.000 - Rp 100.000
                                                                    </li>
                                                                    <li onClick={()=> dispatch(catalogAction.getFilterdProductsByPrice(100000,500000))}>
                                                                        Rp 100.000 - Rp 500.000
                                                                    </li>
                                                                    <li onClick={()=> dispatch(catalogAction.getFilterdProductsByPrice(500000,1000000))}>
                                                                        Rp 500.000 - Rp 1.000.000
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="row filter">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFilter
