import React, { FC, useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";

import StepWrapper from "components/StepWrapper";
import StepsContentViewer from "components/StepsContainerViewer";

import WithNavbarContainer from "containers/WithNavbarContainer";
import UploadInformationForm from "../../components/UploadInformationForm";
import FileUpload from "components/FileUpload";

interface CreateTrackPropsInterface {}

export enum STEPS {
  FIRST_STEP,
  SECOND_STEP,
  THIRD_STEP,
}

const CreateTrack: FC<CreateTrackPropsInterface> = ({}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleBack = () => {
    setActiveStep((step) => --step);
  };

  const handleNext = () => {
    if (activeStep === STEPS.THIRD_STEP) {
      return;
    }
    setActiveStep((step) => ++step);
  };

  return (
    <WithNavbarContainer>
      <StepWrapper activeStep={activeStep}>
        <StepsContentViewer
          config={[
            {
              condition: activeStep === STEPS.FIRST_STEP,
              render: () => <UploadInformationForm />,
            },
            {
              condition: activeStep === STEPS.SECOND_STEP,
              render: () => (
                <FileUpload setFile={setPicture} accept="image/*">
                  <Button>Загрузить изображение</Button>
                </FileUpload>
              ),
            },
            {
              condition: activeStep === STEPS.THIRD_STEP,
              render: () => (
                <FileUpload setFile={setAudio} accept="audio/*">
                  <Button>Загрузить аудио</Button>
                </FileUpload>
              ),
            },
          ]}
        />
      </StepWrapper>

      <Grid container justifyContent="space-between">
        <Button
          disabled={activeStep === STEPS.FIRST_STEP}
          variant="outlined"
          color="error"
          onClick={handleBack}
        >
          Назад
        </Button>
        <Button variant="outlined" color="success" onClick={handleNext}>
          Далее
        </Button>
      </Grid>
    </WithNavbarContainer>
  );
};

export default CreateTrack;
