import React, { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
//internal modules
import detailUniversityQuery from 'query/detail-university';
//internal component
import LoadingIcon from 'common/loading/LoadingIcon';
import Author from 'modules/pages/detail-university/common/Author';
import { SubBox } from 'theme/component/SubBox';
//multiple i18n
import { useTranslation } from 'react-i18next';

export default function Cooperation() {
  //STATE
  const { t } = useTranslation();
  const { slug } = useParams();
  const { data, loading, error } = useQuery(detailUniversityQuery.GET_PARTNER, {
    variables: {
      id: slug,
    },
  });

  //LIFECYCLE
  useEffect(() => {}, [data, loading, error]);
  const contentPartner =
    !loading &&
    !error &&
    !!data &&
    data.allUniversities[0].detailUniversity.partner;

  return (
    <div className="container">
      <Author />
      <h1 className="title-cooperation">
        {t('detailUniversity.cooperation.title')}
      </h1>
      <SubBox>
        <table>
          <thead>
            <tr>
              <th className="th-cooperation">
                {t('detailUniversity.cooperation.table.name')}
              </th>
              <th className="th-cooperation">
                {t('detailUniversity.cooperation.table.zone')}
              </th>
              <th className="th-cooperation">
                {t('detailUniversity.cooperation.table.linkedProgram')}
              </th>
              <th className="th-cooperation">
                {t('detailUniversity.cooperation.table.description')}
              </th>
            </tr>
          </thead>
          {!!contentPartner ? (
            <tbody className="tbody-cooperation">
              {contentPartner.map((item, index) => (
                <tr>
                  <td className="td-coopreation">{item.name}</td>
                  <td className="td-coopreation">{item.state}</td>
                  <td className="td-coopreation">{item.description}</td>
                  <td className="td-coopreation">
                    <a href={item.link}>{item.link}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td>
                  <LoadingIcon />
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </SubBox>
    </div>
  );
}
