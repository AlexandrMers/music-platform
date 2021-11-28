import React, { FC } from "react";
import { Divider, List } from "@material-ui/core";

import Comment from "./Comment";

import { checkIsNotLastElementInList } from "./helpers";

import { IComment } from "types/Comment";

import styles from "./style.module.scss";

interface CommentsPropsInterface {
  comments: IComment[];
}

const Comments: FC<CommentsPropsInterface> = ({ comments }) => {
  return (
    <List
      className={styles.Comments}
      sx={{
        bgcolor: "background.paper",
      }}
    >
      {comments.map(({ id, username, text }, index) => (
        <div key={id}>
          <Comment username={username} text={text} />
          {checkIsNotLastElementInList(index, comments) && (
            <Divider variant={"middle"} component="li" />
          )}
        </div>
      ))}
    </List>
  );
};

export default Comments;
