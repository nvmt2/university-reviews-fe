import React from "react";
import "./../style.css";
// import { NavLink } from "react-router-dom";

// const data = [
//   {
//     name: "Duy Tan",
//     slug: "dtu",
//     rating: 5,
//   },
//   {
//     name: "Dai hoc bach khoa",
//     slug: "bku",
//     rating: 4,
//   },
//   {
//     name: "Dai hoc Ha Noi",
//     slug: "hn",
//     rating: 4,
//   },
// ];
// const slugs = data.map((item) => item.slug);
function Index({ match }) {
  return (
    <div>
      {/* <div>
        <ul>
          {data.map((item, index) => (
            <li>
              <NavLink
                key={index}
                to={(location) => {
                  return {
                    pathname: `${location.pathname}topics/${item.slug}`,
                    state: { slugs: slugs },
                  };
                }}
              >
                Xem binh luận {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div> */}

      <div>
        <h1 className="test"> Trang chủ ( Thiện code) </h1>
        {/* Code ở đây .......... */}
        <p>Thiênj chó</p>
      </div>
    </div>
  );
}

export default Index;
