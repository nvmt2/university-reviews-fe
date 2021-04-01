import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
//internal modules
import detailUniversityQuery from 'query/detail-university';
//internal components
import LoadingIcon from 'common/loading/LoadingIcon';
import Author from 'modules/pages/detail-university/common/Author';
import FormMail from 'modules/pages/detail-university/common/FormMail';

function Introduce() {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(
    detailUniversityQuery.GET_INTRODUCE,
    {
      variables: {
        id: slug,
      },
    }
  );
  let myLoading = false;
  setTimeout(() => {
    myLoading = false;
  }, 3000);

  useEffect(() => {}, [data, loading, error, myLoading]);

  const contentIntroduce =
    !loading &&
    !error &&
    !!data.allUniversities[0].detailUniversity &&
    data.allUniversities[0].detailUniversity.introduce;

  return (
    <div className="intro-background">
      <div className="container ">
        <Author />
        <h1 className=" title-intro-Uni">Giới thiệu tổng quan</h1>
        <div>
          {!!contentIntroduce ? (
            <span>{parse(`${contentIntroduce}`)}</span>
          ) : (
            <LoadingIcon />
          )}
        </div>

        <div className="container row group-contact">
          <FormMail />
        </div>
      </div>
    </div>
  );
}

export default Introduce;
