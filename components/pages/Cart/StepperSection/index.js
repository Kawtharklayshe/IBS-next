import useTranslation from "next-translate/useTranslation";
import { steps } from "../config";
import { Box, Stepper, Step, StepLabel, Typography } from "@mui/material";
import { Circle } from "@mui/icons-material";
import useStyles, { QontoStepIconRoot, QontoConnector } from "./style";

const StepperSection = ({ activeStep }) => {
  let { t, lang } = useTranslation("common");
  const classes = useStyles();

  // Step icon
  const QontoStepIcon = (props) => {
    const { active, completed, className } = props;
    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed || active ? (
          <Circle className={classes.completedCircle} />
        ) : (
          <Circle className={classes.notCompletedCircle} />
        )}
      </QontoStepIconRoot>
    );
  };
  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      connector={<QontoConnector />}
    >
      {steps.map((step, index) => {
        const stepProps = {};
        const labelProps = {};
        return (
          <Step key={step.label} {...stepProps}>
            <StepLabel {...labelProps} StepIconComponent={QontoStepIcon}>
              <Box className={classes.stepLabelContainer}>
                {activeStep >= index || index == 0
                  ? step.filledIcon
                  : step.emptyIcon}{" "}
                <Typography
                  variant="subtitle2"
                  sx={{
                    color:
                      activeStep >= index || index == 0
                        ? "primary.main"
                        : "onBackground.light",
                  }}
                >
                  {t(step.label)}
                </Typography>
              </Box>
            </StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default StepperSection;
