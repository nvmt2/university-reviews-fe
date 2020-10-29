import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUniversityAction } from "state/ducks/common/actions/home-page";

function FilterBar() {
  const [items, setItems] = useState("");
  const dispatch = useDispatch();

  dispatch(
    fetchUniversityAction({
      test: "fuck ",
    })
  );

  const addItem = (event) => {
    event.preventDefault();
    console.log("ITEMS", items);
  };
  const handleOnChange = (e) => {
    setItems({
      ...items,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="filter">
      <a href="/" className="map d-block text-center">
        <i className="fas fa-map-marked-alt"></i> Xem vị trí
      </a>
      <form action="" className="filter-form" onSubmit={addItem}>
        <fieldset>
          <legend>Tìm kiếm theo vùng</legend>
          <label className="locate d-block">
            <input
              type="radio"
              id="bac"
              name="locate"
              value="Mien Bac"
              onChange={handleOnChange}
            />
            <label for="bac">Miền Bắc</label>
          </label>
          <label className="locate d-block">
            <input
              type="radio"
              id="trung"
              name="locate"
              value="Mien Trung"
              onChange={handleOnChange}
            />
            <label for="trung">Miền Trung</label>
          </label>
          <label className="locate d-block">
            <input
              type="radio"
              id="nam"
              name="locate"
              value="Mien Nam"
              onChange={handleOnChange}
            />
            <label for="nam">Miền Nam</label>
          </label>
        </fieldset>
        {/* <!-- -----------end tìm kiếm theo vùng---------- -->  */}

        <fieldset>
          <legend>Nhóm ngành</legend>
          <select
            id="nhomNghanh"
            className="form-control"
            name="major"
            onChange={handleOnChange}
          >
            <optgroup label="Nhóm ngành về kỹ thuật">
              <option>Công nghệ thông tin</option>
              <option>Kiến trúc và xây dựng</option>
              <option value="">Khoa học cơ bản</option>
            </optgroup>
            <optgroup label="Nhóm ngành về Kinh Tế">
              <option>Quản trị</option>
              <option>Sản xuất và chế biến</option>
              <option value="">Báo chí-khoa học và xã hội</option>
            </optgroup>
            <option value="">Luật và nhân văn</option>
            <option value="">Nghệ thuật-thẩm mỹ-đồ họa</option>
            <option value="">Sư Phạm</option>
            <option value="">Nông-lâm-ngư nghiệp</option>
          </select>
        </fieldset>
        {/* <!-- -----------end nhóm nghành---------- --> */}

        <fieldset>
          <legend>Chuyên ngành</legend>
          <label for="" className="locate d-block margin-r-10">
            <select name="nhomNghanh" id="nhomNghanh" className="form-control">
              <option value="">Tất cả nghành</option>
            </select>
          </label>
        </fieldset>
        {/* <!-- end ngành  -->  */}

        <fieldset>
          <legend>Loại trường</legend>
          <label for="" className="locate d-block">
            <input type="checkbox" name="loaiTruong" value="" id="DHCL" />
            <label for="DHCL">Đại học công lập</label>
          </label>
          <label for="" className="locate d-block">
            <input type="checkbox" name="loaiTruong" value="" id="DHTH" />
            <label for="DHTH">Đại học tư thục</label>
          </label>
          <label for="" className="locate d-block">
            <input type="checkbox" name="loaiTruong" value="" id="CD" />
            <label for="CD">Cao đẳng</label>
          </label>
          <label for="" className="locate d-block">
            <input type="checkbox" name="loaiTruong" value="" id="DTN" />
            <label for="DTN">Đào tạo nghề</label>
          </label>
        </fieldset>
        {/* <!-- end --> */}

        <button className="btn btn-outline-success btn-loc">Lọc</button>
      </form>
    </div>
  );
}

export default FilterBar;
