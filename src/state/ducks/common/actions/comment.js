import commentTypes from "./../types/comment";
import { action } from "typesafe-actions";

export const renderCommentAction = () => action(commentTypes.RENDER_COMMENT);

export const fetchCommentAction = (data) =>
  action(commentTypes.FETCH_COMMENT, data);
