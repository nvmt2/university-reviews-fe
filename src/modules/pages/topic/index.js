import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
//internal modules
import { topicQuery } from 'query/topic';
//internal components
import Categories from 'modules/pages/topic/components/Categories';
import CardTopic from 'modules/pages/topic/components/CardTopic';
import Banner from 'modules/pages/topic/components/Banner';
import LoadingIcon from 'common/loading/LoadingIcon';
//material-ui components
import Pagination from '@material-ui/lab/Pagination';

function Topic() {
  //STATE
  const { slug } = useParams();
  let history = useHistory();
  const [tag, setTag] = useState();
  //call api get all of topics
  const { data, loading, error } = useQuery(topicQuery.GET_ALL_TOPICS, {
    variables: {
      id: slug,
      tag,
    },
  });
  let contentTopic = !loading && !error && !!data && data.allTopics;
  const nameUniversity = !!contentTopic && data.allTopics[0].university.name;

  //METHOD
  //handle event : when user click tag in Categories component, so re-render CardTopic component by tag which clicked by user
  const handleClickTag = (tag) => {
    setTag(tag);
  };

  //LIFECYCLE
  useEffect(() => {
    //Check current param with array params in data
    if (error) history.push('/notfound');
  }, [data, loading, error, tag]); // render when data, loading or error variables have a new value

  return (
    <div className="topic">
      {!!nameUniversity && <Banner name={nameUniversity} />}
      <div className="container">
        <div className="main-topic">
          <div className="row">
            <div className="col-md-8 items-topics">
              {!!contentTopic ? (
                contentTopic.map((item, index) => (
                  <CardTopic key={index} {...item} />
                ))
              ) : (
                <LoadingIcon />
              )}
            </div>
            {/* show list tags at right */}
            <div className="col-md-3 group-categories-topic">
              <Categories handleEvent={handleClickTag} />
            </div>
            <div className="col-md-8 mb-5 ">
              <div style={{ width: '50%', margin: 'auto' }}>
                <Pagination
                  count={2}
                  color="primary"
                  shape="rounded"
                  variant="outlined"
                  size="medium"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Topic;
