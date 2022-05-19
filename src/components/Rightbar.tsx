import { Box } from "@mui/material";

export function Rightbar() {
  return (
    <Box
      bgcolor="lightblue"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
}