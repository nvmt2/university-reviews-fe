import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
//internal components
import PostComment from 'modules/pages/comment/components/PostComment';
import HeaderComment from 'modules/pages/comment/components/HeaderComment';
import ContentComment from 'modules/pages/comment/components/ContentComment';
import PaginationComment from 'modules/pages/comment/components/PaginationComment';
import { MyContainer } from 'theme/component/MyContainer';
//internal modules
import { commentQuery } from 'query/comment';
import { fetchCommentAction } from 'state/ducks/common/actions/comment';
//material-ui components
import Alert from '@material-ui/lab/Alert';

const Index = () => {
  //STATE
  const dispatch = useDispatch();
  const { slug } = useParams();
  //call api to fetch all of comments
  const { data, loading, error } = useQuery(commentQuery.GET_ALL_COMMENT, {
    variables: {
      id: slug,
    },
  });
  const commentsLocal = useSelector((state) => state.comment);
  const contentComment = !!commentsLocal.data && commentsLocal.data;
  const author = useSelector((state) => state.login.data.id);

  // const checkAuthor = () => {
  //   let result = !!state ? "block" : "none";
  //   return { display: result };
  // };

  //LIFECYCLE
  useEffect(() => {
    if (!!data && !loading && !error) {
      dispatch(fetchCommentAction(data.allComments));
    }
  }, [data, loading, error, dispatch]);

  return (
    <MyContainer>
      <HeaderComment />
      {/* Form which to post comment */}
      <div className="container body-comment">
        {!!author ? (
          <PostComment />
        ) : (
          <Alert color="info">
            <NavLink to="/login">Đăng nhập</NavLink>{' '}
            <span>để có thể bình luận</span>
          </Alert>
        )}

        {/* Block of content comments */}
        <div className="container group-content-comment">
          {!!contentComment ? (
            contentComment.map((item, index) => <ContentComment {...item} />)
          ) : (
            <h1>Loading</h1>
          )}
        </div>
        <PaginationComment />
      </div>
    </MyContainer>
  );
};
export default Index;
