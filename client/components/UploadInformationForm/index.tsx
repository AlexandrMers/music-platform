import React, { FC } from "react";
import { Grid, TextField } from "@material-ui/core";

import styles from "./style.module.scss";

interface UploadInformationFormPropsInterface {}

const UploadInformationForm: FC<UploadInformationFormPropsInterface> = ({}) => {
  return (
    <form className={styles.UploadInformationForm}>
      <Grid container direction="column" p="20px">
        <TextField
          className={styles.UploadInformationForm__Input}
          label="Название трека"
        />
        <TextField
          className={styles.UploadInformationForm__Input}
          label="Имя исполнителя"
        />
        <TextField
          className={styles.UploadInformationForm__Input}
          label="Слова к треку"
        />
      </Grid>
    </form>
  );
};

export default UploadInformationForm;
