import React from 'react';
import { NavLink } from "react-router-dom";

function CardHome(props) {
    const { address, introduce, logo, name, zone, id} = props;
    return (
        <div class="highlight-topic">
        <div class="row">
            <div class="col-md-1">
                <div id="img-logo">
                    <img src={ logo.publicUrl } alt="logo univesity" className="logo-university img-fluid" />
                </div>
            </div>
            <div class="col-md-11 padding-left-32">
                <p class="university-name"> { name }</p>
                <span class="address">{ address }</span>
                <span class="count-rate mr-3"><i class="fas fa-star"></i> 200 đánh giá</span>
                <span class="count-comment"><i class="fas fa-comments"></i> 462 bình luận</span>

                <p class="demo-content">{ introduce }</p>

                <a href="/" class="detail">
                {
                    <NavLink 
                            to={(location) => {
                            return {
                                pathname: `${location.pathname}detail-university/${id}`,
                            };
                            }}
                            onClick={()=> localStorage.setItem("slugUniversity",id)} //pass id university to localStorage so that it resolve matching url at detail-university/index directory
                        >
                           Chi tiết
                        </NavLink>
                }
                 <i class="fas fa-chevron-right"></i></a>
                <i class="far fa-bookmark"></i>                
            </div>
        </div>
    </div>
    )
}

export default CardHome
