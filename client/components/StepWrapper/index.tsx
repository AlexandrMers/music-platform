import React, { FC } from "react";
import {
  Stepper,
  Container,
  Step,
  StepLabel,
  Grid,
  Card,
} from "@material-ui/core";

import styles from "./styles.module.scss";

interface StepWrapperPropsInterface {
  activeStep: number;
}

const steps = ["Информация о треке", "Загрузите обложку", "Загрузите аудио"];

const StepWrapper: FC<StepWrapperPropsInterface> = ({
  activeStep,
  children,
}) => {
  return (
    <Container className={styles.StepWrapper}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const completed = activeStep > index;

          return (
            <Step completed={completed} key={index}>
              <StepLabel>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <Grid
        container
        justifyContent="center"
        className={styles.StepWrapper__ChildrenContainer}
      >
        <Card className={styles.StepWrapper__Card}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
