import Countup from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Container, Typography, Box } from "@mui/material";
import * as FAB from "@fortawesome/free-brands-svg-icons";
import * as FAS from "@fortawesome/free-solid-svg-icons";
import * as FAR from "@fortawesome/free-regular-svg-icons";
import "react-circular-progressbar/dist/styles.css";
import useStyles from "./style";

const StatisticsSection = ({ data }) => {
  const classes = useStyles({ backgroundImage: data.detail.backgroundImage });

  const getIcon = (name) => {
    const str = name;
    const newStr = "f" + str?.slice(1);
    return newStr;
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.overlay} />
      <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 overflow-hidden">
      <Container maxWidth="false" className={classes.innerContainer}>
        <Grid container className={classes.gridContainer}>
        
            <div class="container relative">
            <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-3">  
          {data?.items?.map((item, index) => (
       
           <div class="group mx-10 relative p-6 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out bg-white dark:bg-slate-900 overflow-hidden text-center">
                           {/* <div class="w-20 h-20 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto"> */}
                              
                   <FontAwesomeIcon
                     icon={
                       FAB[getIcon(item.icon)] != null
                         ? FAB[getIcon(item.icon)]
                         : FAS[getIcon(item.icon)] != null
                         ? FAS[getIcon(item.icon)]
                         : FAR[getIcon(item.icon)] != null
                         ? FAR[getIcon(item.icon)]
                         : ""
                     }
                     className={classes.itemIcon}
                   />
                           {/* </div> */}
   
                           <div class="mt-6">
                               <a href="" class="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">    {item.title} </a>
                               <p class="text-slate-400 group-hover:text-white/75 transition-all duration-500 ease-in-out mt-3"><Countup
                       end={item.quantity}
                       duration={1.8}
                       startOnMount={true}
                       className={classes.itemQuantity}
                     /></p>
                           </div>
                       </div>
                      
          ))}
           </div>
          </div>
                  
        </Grid>
      </Container>
      </section>
    </Box>
  );
};
export default StatisticsSection;
