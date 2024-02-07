import { Typography, Box } from "@mui/material";
import useStyles from "./style";

const TeamCard = ({ employee }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.innerContainer}>
        <Box className={classes.employeeImageContainer}>
          <img
            src={employee?.image || "/images/team.png"}
            className={classes.employeeImage}
            alt="teamImage"
          />
        </Box>
        <Typography
          variant="h6"
          component="h6"
          className={classes.employeeFullName}
        >
          {employee?.fullName}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className={classes.employeePosition}
        >
          {employee?.position}
        </Typography>
      </Box>
    </Box>
  );
};
export default TeamCard;
