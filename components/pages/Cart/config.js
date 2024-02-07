import CreditCardSharpIcon from "@mui/icons-material/CreditCardSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CheckIcon from "@mui/icons-material/Check";
export const steps = [
  {
    label: "Cart",
    emptyIcon: (
      <ShoppingCartOutlinedIcon
        sx={{ m: 1, p: 0.5, fontSize: "30px", borderRadius: "6px" }}
      />
    ),
    filledIcon: (
      <ShoppingCartOutlinedIcon
        sx={{
          color: "onPrimary.main",
          backgroundColor: "primary.main",
          m: 1,
          p: 0.5,
          fontSize: "30px",
          borderRadius: "6px",
        }}
      />
    ),
  },
  {
    label: "Delivery information",
    emptyIcon: (
      <CreditCardSharpIcon
        sx={{
          m: 1,
          p: 0.5,
          fontSize: "30px",
          borderRadius: "6px",
          backgroundColor: "rgba(206, 206, 206, 0.12)",
        }}
      />
    ),
    filledIcon: (
      <CreditCardSharpIcon
        sx={{
          color: "onPrimary.main",
          backgroundColor: "primary.main",
          m: 1,
          p: 0.5,
          fontSize: "30px",
          borderRadius: "6px",
        }}
      />
    ),
  },
  {
    label: "Complete_order",
    emptyIcon: (
      <CheckIcon
        sx={{
          m: 1,
          p: 0.5,
          fontSize: "30px",
          borderRadius: "6px",
          backgroundColor: "rgba(206, 206, 206, 0.12)",
        }}
      />
    ),
    filledIcon: (
      <CheckIcon
        sx={{
          color: "onPrimary.main",
          backgroundColor: "primary.main",
          m: 1,
          p: 0.5,
          fontSize: "30px",
          borderRadius: "6px",
        }}
      />
    ),
  },
];
