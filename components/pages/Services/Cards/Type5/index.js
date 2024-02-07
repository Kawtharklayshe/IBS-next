import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import CustomButton from "../../../../UI/Button/Type1";
import useStyles from "./style";

const ServiceCard = ({ item, parentPageTitle }) => {
  const Router = useRouter();
  let { t, lang } = useTranslation("common");
  const classes = useStyles();

  function convertToPlain(html) {
    if (typeof window === "object") {
        let tempDivElement = document.createElement("div");
        tempDivElement.innerHTML = html;
        let text = tempDivElement.textContent || tempDivElement.innerText || "";
        
        // Split the text into an array of words
        let words = text.trim().split(/\s+/);
        
        // Take the first 150 words and join them back together
        let truncatedText = words.slice(0, 40).join(" ");

        // If the text was truncated, add ellipsis
        if (words.length > 150) {
            truncatedText += " ...";
        }

        return truncatedText;
    }
}

  const handleClick = () => {
    Router.push({
      pathname: "/services/subservices",
      query: {
        id: item.id,
        blog: parentPageTitle,
      },
    });
  };
  return (
    <Box>
   <div class="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden text-center h-full">
    <div class="h-full flex justify-center items-center">
        <img src={item.image} alt="" class="w-25 h-25 object-cover"/>
    </div>

    <div class="content p-6 h-full flex flex-col justify-between"> 
        <div>
            <a href="blog-detail.html" class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{item.title}</a>
            <p class="text-slate-400 mt-3">{convertToPlain(item.description)}</p>
        </div>
        
        <div class="mt-4">
            <a href="blog-detail.html" class="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">
                <CustomButton onSubmit={handleClick} title="See All"/>
                <i class="uil uil-arrow-right"></i>
            </a>
        </div>
    </div>
</div>

      
    </Box>
  );
};

export default ServiceCard;
