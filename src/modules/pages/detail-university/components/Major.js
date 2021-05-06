import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
//internal modules
import detailUniversityQuery from 'query/detail-university';
//internal components
import LoadingIcon from 'common/loading/LoadingIcon';
import Author from 'modules/pages/detail-university/common/Author';
import { SubBox } from 'theme/component/SubBox';
//multiple i18n
import { useTranslation } from 'react-i18next';

function Major() {
  //STATE
  const { t } = useTranslation();
  const { slug } = useParams();
  const { data, loading, error } = useQuery(detailUniversityQuery.GET_MAJOR, {
    variables: {
      id: slug,
    },
  });
  const contentMajor =
    !loading &&
    !error &&
    !!data &&
    data.allUniversities[0].detailUniversity.majors;

  return (
    <div className="container">
      <Author />

      <h1 className="container title-major">
        {t('detailUniversity.major.title')}
      </h1>
      <SubBox>
        <table className="table-major">
          <thead>
            <th className="th-major" scope="col">
              {t('detailUniversity.major.table.groupsOfDisciplines')}
            </th>
            <th className="th-major" scope="col">
              {t('detailUniversity.major.table.major')}
            </th>
            <th className="th-major" scope="col">
              {t('detailUniversity.major.table.subject')}
            </th>
            {/* <th className="th-major" >Điểm chuẩn</th> */}
          </thead>
          {!!contentMajor ? (
            contentMajor.map((groupMajor, indexGroupMajor) => {
              return (
                <tbody key={indexGroupMajor}>
                  {groupMajor.majors.map((branchMajor, indexBranchMajor) => (
                    <tr>
                      {indexBranchMajor === 0 && (
                        <th
                          className="td-major"
                          scope="row"
                          rowspan={groupMajor.majors.length}
                        >
                          {' '}
                          {groupMajor.name}{' '}
                        </th>
                      )}
                      <td className="td-major">{branchMajor.name}</td>
                      <td className="td-major">{branchMajor.subject}</td>
                    </tr>
                  ))}
                </tbody>
              );
            })
          ) : (
            <LoadingIcon />
          )}
        </table>
      </SubBox>
      <button className="btn-major">
        {' '}
        {t('detailUniversity.major.btn.more')}
      </button>
      <div className="contact-major">
        <h4 className="title-contact-major">
          {t('detailUniversity.major.leaveInfoTxt')}
        </h4>
        <p className="p-title-contact">{t('detailUniversity.major.noteTxt')}</p>
        <input
          type="email"
          placeholder="Email"
          className="input-contact-major"
        />
        <button type="submit" className="btn-submit-major">
          {t('detailUniversity.major.btn.send')}
        </button>
      </div>
    </div>
  );
}
export default Major;
