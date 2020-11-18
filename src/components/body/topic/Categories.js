import React from "react";
import "./Categories.css";

function Categories() {
  const tags = [
    "  Bạo lực",
    "test",
    "cơ sở vật chất",
    "hộc phí",
    "ngành học",
    "sinh viên",
  ];
  return (
    <div>
      <p className="title-categories-topic">Chuyên mục nổi bật</p>
      <div className="category-topic">
        {tags.map((item, index) => (
          <a href="." key={index} className="content-category-topic">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Categories;
