import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Index({ children }) {
  return (
    <div style={{ marginTop: 0, marginBottom: 0 }}>
      <Header />
      {/* short code of { props.children } */}
      <div id="children" style={{ minHeight: 600 }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Index;
