import React from "react";

import "./Categories.css";

function Categories() {
  return (
    <div>
      <p className="title-categories-topic">Chuyên mục nổi bật</p>
      <div className="category-topic">
        <a href="#" className="content-category-topic">
          Bạo lực
        </a>
        <a href="#" className="content-category-topic">
          Test
        </a>
        <a href="#" className="content-category-topic">
          Cơ sở vật chất
        </a>
        <a href="#" className="content-category-topic">
          Học phí
        </a>
        <a href="#" className="content-category-topic">
          Ngành học
        </a>
        <a href="#" className="content-category-topic">
          Sinh viên
        </a>
      </div>
    </div>
  );
}

export default Categories;
