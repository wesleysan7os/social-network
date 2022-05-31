import { Fab, Tooltip } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

export function Add() {
  return (
    <>
      <Tooltip title="Add" 
      sx={{
        position:"fixed", 
        bottom:20,
        left: {xs: "calc(50% - 25px)", md: 30}
      }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
}