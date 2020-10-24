import React from 'react';
import { useParams } from "react-router-dom";
import {
  Route,
  NavLink
} from "react-router-dom";
import { routes, toRoutes } from "routes-detail-university";
import Wrapper from "./Wrapper";
import "./Major.css"

function Index(props) {
  const slug = useParams();
    return (
     
      <Wrapper>
        <ul>
          {
            toRoutes.map((item, index)=> 
              <li key={index}>
                <NavLink to = {
                  location => {
                    return {
                      pathname: `/detail-university/${localStorage["slugUniversity"]}${item.field}`, //Because it don't keep old slug, it update new slug
                    }
                  }
                }>
                {item.name}
              </NavLink>
              </li>)
          }
        </ul>
        {
          routes.map((route, index) => 
            <Route {...route} key={index} />
          )
        }
      </Wrapper>
    )
}

export default Index


