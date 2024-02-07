import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { getAutherisedFetch } from "../../../../services/httpService";
import { ClientSideGetSearchedProductsOptions } from "../../../../services/endpoints";
import { Box, Typography, TextField } from "@mui/material";
import { useAutocomplete } from "@mui/base/AutocompleteUnstyled";
import { Search } from "@mui/icons-material";
import useStyles, { Listbox, SearchListItem } from "./style";

const AutocompleteSearchField = ({
  onSelecting,
  onClickSearchButton,
  onClose,
  applyAnimation,
}) => {
  let { t } = useTranslation("common");
  const Router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [dataOptions, setDataOptions] = useState([]);

  // Function for getting data
  const handleRefetchOptions = async () => {
    const res = await getAutherisedFetch(
      ClientSideGetSearchedProductsOptions(searchValue),
      process.env.NEXT_PUBLIC_MERCHANT,
      Router.locale
    );
    let resData = await res?.json();
    if (resData?.data) {
      const options = resData?.data.pageItems.items.map((product) => ({
        name: product.name,
        value: product.id,
        slug: product.slug,
        img: product.image,
        brand: product.brand?.name,
      }));
      setDataOptions(options);
    }
  };
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: dataOptions,
    inputValue: searchValue,
    onClose: onClose,
    getOptionLabel: (option) => option?.name ?? "",
    onInputChange: (e, data) => setSearchValue(data),
    onChange: (e, option) => {
      if (typeof option == "object" && option != undefined)
        onSelecting(option.slug, option.name);
    },
    freeSolo: true,
  });
  const classes = useStyles({ applyAnimation: applyAnimation ? true : false });

  useEffect(() => {
    handleRefetchOptions();
  }, [searchValue]);

  return (
    <Box className={classes.root} {...getRootProps()}>
      <TextField
        variant="outlined"
        type="search"
        className={classes.textInput}
        autoFocus
        inputProps={{ ...getInputProps() }}
        onKeyDown={(e) => {
          if (e.key === "Enter") onClickSearchButton(e.target.value);
        }}
        onReset={() => {
          setSearchValue("");
        }}
        placeholder={t("Search Here")}
      />
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })} key={index}>
              <Box className={classes.listItemContainer}>
                <img src={option.img} className={classes.listItemImage} />
                <Box className={classes.listItemDetailsContainer}>
                  <Typography
                    variant="subtitle1"
                    className={classes.listItemTitle}
                  >
                    {option.name}
                    {" - "}
                    <Typography
                      variant="caption"
                      className={classes.listItemSubTitle}
                    >
                      {option.brand}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </li>
          ))}
          <SearchListItem onClick={() => onClickSearchButton(searchValue)}>
            <Search className={classes.searchIcon} />
            {t("Search More")}
          </SearchListItem>
        </Listbox>
      ) : null}
    </Box>
  );
};

export default AutocompleteSearchField;
