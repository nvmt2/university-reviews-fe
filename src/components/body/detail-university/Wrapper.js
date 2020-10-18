import React from 'react';
import Banner from "./Banner";

function Wrapper({children}) {
    return (
        <div>
        <Banner />
            <div>
                {children}
            </div>
            
        </div>
    )
}

export default Wrapper
