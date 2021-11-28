import React, { FC } from "react";
import { Box, Button, Grid, TextField } from "@material-ui/core";

import { SubmitType } from "types/SubmitType";

interface CommentFormPropsInterface {
  onSubmit: (params: any) => void;
}

const CommentForm: FC<CommentFormPropsInterface> = ({ onSubmit }) => {
  const handleSubmit = (event: SubmitType) => {
    event.preventDefault();
  };

  return (
    <Grid marginTop="15px" container direction="column" maxWidth="50%">
      <form onSubmit={handleSubmit}>
        <Box marginBottom="15px">
          <TextField
            fullWidth
            name="name"
            label="Ваше имя"
            variant="outlined"
          />
        </Box>

        <Box marginBottom="15px">
          <TextField
            fullWidth
            label="Ваш комментарий"
            multiline
            name="comment"
            variant="outlined"
          />
        </Box>

        <Grid alignSelf="end">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            type="submit"
          >
            Отправить
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default CommentForm;
