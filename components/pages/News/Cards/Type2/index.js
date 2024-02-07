import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Typography, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useStyles from "./style";

const NewsCard = ({ data, theme, parentPageTitle }) => {
  const Router = useRouter();
  const classes = useStyles();
  let { t, lang } = useTranslation("common");
  function convertToPlain(html) {
    if (typeof window === "object") {
      let tempDivElement = document.createElement("div");
      tempDivElement.innerHTML = html;
      return tempDivElement.textContent || tempDivElement.innerText || "";
    }
  }
  return (
    <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-8 gap-[30px]">
      
    <div class="group rounded-md shadow-md dark:shadow-gray-800 relative overflow-hidden" >
        <img  src={
data?.mediaItems?.length > 0
? data?.mediaItems[0]?.thumbnailUrl
: "/images/no-image.png"
} class="" alt=""/>
        <div class="absolute inset-0 bg-gradient-to-t to-transparent via-slate-900/60 group-hover:via-slate-900/40 from-slate-900 top-3/4 group-hover:top-0 transition-all duration-500"></div>
    
        <div class="absolute bottom-0 mx-auto start-0 end-0 group-hover:bottom-0 transition-all duration-500 px-6 pb-6 text-center">
            <i data-feather="headphones" class="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 mx-auto"></i>

            <div class="mt-6">
                <a href="" class="text-xl font-semibold text-white transition-all duration-500">{data.title}</a>

                <p class="text-white/50 hidden group-hover:block transition-all duration-500 ease-in-out mt-4"> {convertToPlain(data?.description)}</p>
            </div>
        </div>
    </div>


</div>
  );
};
export default NewsCard;
