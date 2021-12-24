import * as React from "react";
import Button from "@mui/material/Button";

const CryptoButton = (props:any) => {
  return (
    <Button sx={{ mb: 5, mt: 5 }} {...props}>
      Crypto Botón
    </Button>
  );
};

export default CryptoButton;
