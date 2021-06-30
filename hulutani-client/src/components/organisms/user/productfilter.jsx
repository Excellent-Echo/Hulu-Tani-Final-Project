import React from 'react'

import '../../../assets/css/productfilter.css'
import { useDispatch, useSelector } from 'react-redux';
import catalogAction from '../../../redux/public/catalog/catalogAction';

const ProductFilter = () => {
    const categories = useSelector(
        (state) => state.adminShowCategory.categories
      );
    const dispatch = useDispatch()

    const formData1 = new FormData()
    const formData2 = new FormData()
    // const formData3 = new FormData()
    const formData4 = new FormData()

    formData1.set("dari",0)
    formData1.set("sampai",50000)
    formData2.set("dari",50000)
    formData2.set("sampai",100000)
    // formData3.set("dari",100000)
    // formData3.set("sampai",500000)
    formData4.set("dari",500000)
    formData4.set("sampai",10000000)

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
                                                                            <li key={index}>
                                                                                <a onClick={() => dispatch(catalogAction.getFilterdProductsByCategory(data.id))}>
                                                                                    {data.nama}
                                                                                </a>
                                                                            </li>
                                                                        )
                                                                    })}
                                                                    
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="row filter">
                                                           <div className="col-sm">
                                                                <h6 className="accent-text accent-title">
                                                                    HARGA
                                                                </h6>
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                       <a  onClick={()=> dispatch(catalogAction.getFilterdProductsByPrice(formData1))}>
                                                                            Rp 0 - Rp 50.000
                                                                       </a>
                                                                    </li>
                                                                    <li>
                                                                        <a onClick={() => dispatch(catalogAction.getFilterdProductsByPrice(formData2))}>
                                                                            Rp 50.000 - Rp 100.000
                                                                        </a>
                                                                    </li>
                                                                    {/* <li>
                                                                        <a onClick={() => dispatch(catalogAction.getFilterdProductsByPrice(formData3))}>
                                                                            Rp 100.000 - Rp 500.000
                                                                        </a>
                                                                    </li> */}
                                                                    <li>
                                                                        <a onClick={() => dispatch(catalogAction.getFilterdProductsByPrice(formData4))}>
                                                                            Rp 500.000 +
                                                                        </a>
                                                                    </li>
                                                                </ul>
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
            </div>
        </>
    )
}

export default ProductFilter
