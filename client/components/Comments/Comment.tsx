import React, { FC } from "react";

import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";

function getFirstLetterFromWord(username: string) {
  return username[0];
}

const Comment: FC<{
  username: string;
  text: string;
}> = ({ username, text }) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={getFirstLetterFromWord(username)} src="1" />
      </ListItemAvatar>
      <ListItemText
        primary={username}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="gray"
            >
              {text}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default Comment;
