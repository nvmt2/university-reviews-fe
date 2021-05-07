import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
//internal modules
import { topicQuery } from 'query/topic';
import MyProgress from 'common/loading/MyProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
//internal components
import { SubBox } from 'theme/component/SubBox';
//multiple i18n
import { useTranslation } from 'react-i18next';

function Categories(props) {
  //STATE
  const { t } = useTranslation();
  const { slug } = useParams();
  const { data, loading, error } = useQuery(topicQuery.GET_TAGS, {
    variables: {
      idUniversity: slug,
    },
  });
  const listTags = !loading && !error && data.allTopics;
  // remove the same elements in array
  let uniqueTags =
    !!listTags &&
    listTags.filter(
      (arr, index, self) => index === self.findIndex((t) => t.tags === arr.tags)
    );

  return (
    <SubBox className="group-categories-topic">
      <p className="title-categories-topic">{t('topic.categories.title')}</p>
      <div className="category-topic">
        {!!uniqueTags ? (
          uniqueTags.map((item, index) => (
            <button
              key={index}
              className="content-category-topic"
              onClick={() => props.handleEvent(item.tags)}
            >
              {item.tags}
            </button>
          ))
        ) : (
          /* <MyProgress />  */
          <h1>...</h1>
        )}
      </div>
    </SubBox>
  );
}

export default Categories;
