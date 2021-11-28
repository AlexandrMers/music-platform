import React, { FC } from "react";

import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import styles from "./style.module.scss";

interface ButtonBackPropsInterface {
  onClick: (e: React.MouseEvent) => void;
}

const ButtonBack: FC<ButtonBackPropsInterface> = ({ onClick }) => {
  return (
    <div className={styles.ButtonBack}>
      <IconButton
        className={styles.ButtonBack__Icon}
        color={"primary"}
        size={"large"}
        onClick={onClick}
      >
        <ArrowBackIcon />
      </IconButton>
    </div>
  );
};

export default ButtonBack;
