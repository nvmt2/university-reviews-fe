import React from 'react';
import Banner from "./Banner";
import Sticky from "./common/Sticky";

function Wrapper({children}) {
    return (
        <div>
        <Banner />
        <Sticky />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Wrapper
