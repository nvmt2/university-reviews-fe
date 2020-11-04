import React from "react";

import "./style/main.css";

function index() {
  return (
    <div className="news-post">
      <div className="container col-6 new-post">
        <h2 className="title-new-post">Đăng bài</h2>
        <form className="form-new-post">
          <input
            type="text"
            placeholder="Tiêu đề bài viết"
            className="title-post"
          />
          <textarea
            type="text"
            placeholder="Chia sẻ ý kiến của bạn"
            className="content-post"
          />
          <input type="text" placeholder="Nhập thẻ tag" className="tag-post" />
        </form>
        {/**-------------------button----------- */}
        <button className="btn-new-post">Đăng bài viết</button>
      </div>
    </div>
  );
}

export default index;
