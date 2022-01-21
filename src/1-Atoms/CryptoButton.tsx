import * as React from "react";
import Button from "@mui/material/Button";

const CryptoButton = (props:any) => {
  const {bottonText} = props;
  return (
    <Button {...props}>
      {bottonText}
    </Button>
  );
};

export default CryptoButton;
