import React from 'react'

function FilterBar() {
    return (
        <div id="filter" className="text-center">
                        <a href="#" className="map d-block text-center"><i className="fas fa-map-marked-alt"></i> Xem vị trí</a>
                        <form action="" className="filter-form">
                            <div className="form-group">
                                <label for="" className="region d-block font-weight-bold">Tìm kiếm theo vùng</label>
                                <label for="" className="locate d-block">
                                    <input type="radio" name="locate" value="" id="bac" /><label for="bac">Miền Bắc</label>
                                </label>
                                <label for="" className="locate d-block">
                                    <input type="radio" name="locate" value="" id="trung" /><label for="trung">Miền Trung</label>
                                </label>
                                <label for="" className="locate  d-block">
                                    <input type="radio" name="locate" value="" id="nam" /><label for="nam">Miền Nam</label>
                                </label>
                                <hr />
                                {/* <!-- -----------end tìm kiếm theo vùng---------- --> */}
                                <label for="" className="region d-block font-weight-bold mb-3">Nhóm ngành</label>
                                <label for="" className="locate d-block margin-r-10">
                                    <select name="nhomNghanh" id="nhomNghanh" className="form-control">
                                        <option value="">Tất cả nhóm nghành</option>
                                        <option value="">Sản xuất và chế biến</option>
                                        <option value="">Kiến trúc và xây dựng</option>
                                        <option value="">Kinh doanh</option>
                                        <option value="">Công nghệ và thông tin</option>
                                        <option value="">Luật và nhân văn</option>
                                        <option value="">Nghệ thuật-thẩm mỹ-đồ họa</option>
                                        <option value="">Báo chí-khoa học và xã hội</option>
                                        <option value="">Khoa học cơ bản</option>
                                        <option value="">Sư Phạm</option>
                                        <option value="">Nông-lâm-ngư nghiệp</option>
                                    </select>
                                </label>
                                <hr />
                                {/* <!-- -----------end nhóm nghành---------- --> */}
                                <label for="" className="region d-block font-weight-bold mb-3">Ngành</label>
                                <label for="" className="locate d-block margin-r-10">
                                    <select name="nhomNghanh" id="nhomNghanh" className="form-control">
                                        <option value="">Tất cả nghành</option>
                                    </select>
                                </label>
                                <hr />
                                {/* <!-- end ngành  --> */}
                                <label for="" className="region d-block font-weight-bold mb-3">Loại trường</label>
                                <label for="" className="locate d-block">
                                    <input type="checkbox" name="loaiTruong" value="" id="DHCL" /><label for="DHCL">Đại học công lập</label>
                                </label>
                                <label for="" className="locate d-block">
                                    <input type="checkbox" name="loaiTruong" value="" id="DHTH" /><label for="DHTH">Đại học tư thục</label>
                                </label>
                                <label for="" className="locate d-block">
                                    <input type="checkbox" name="loaiTruong" value="" id="CD" /><label for="CD">Cao đẳng</label>
                                </label>
                                <label for="" className="locate d-block">
                                    <input type="checkbox" name="loaiTruong" value="" id="DTN" /><label for="DTN">Đào tạo nghề</label>
                                </label>
                                {/* <!-- end --> */}
                                <button className="btn btn-loc">Lọc</button>
                            </div>
                            
                        </form>
                    </div>
    )
}

export default FilterBar
