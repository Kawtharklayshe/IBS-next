import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

/** custom styles for stepper connector */
export const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    right: theme.direction != "rtl" ? "calc(-50% + 16px)" : "calc(50% + 16px)",
    left: theme.direction != "rtl" ? "calc(50% + 16px)" : "calc(-50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

/** custom styles for step Icon */

export const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: theme.palette.primary.main,
  }),
}));

/** Main stepper classes */

const useStyles = makeStyles((theme) => ({
  // Completed, active step circle class
  completedCircle: {
    color: theme.palette.primary.main,
  },
  // Not completed step circle class
  notCompletedCircle: {
    color: "#dcdcdc",
  },
  // Step label container class
  stepLabelContainer: {
    display: "inline-flex",
    alignItems: "center",
  },
}));

export default useStyles;
