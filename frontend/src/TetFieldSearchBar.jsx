import { useState } from "react";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterProducts from "./FilterProducts";

const TextFieldSearchBar = ({ list }) => {
  return (
    <Box
      className="App"
      sx={{
        width: 400,
        height: 660,
        margin: "100px auto",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
      }}
    >
      <Typography variant="h4" component={"h1"}>
        MUI TextField Search Bar
      </Typography>

      <form style={{ display: "flex", alignItems: "center" }}>
        <TextField
          id="search-bar"
          className="text"
          label="Search title"
          variant="outlined"
          placeholder="Search..."
          size="small"
          sx={{
            width: 350,
            margin: "10px auto"
          }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </form>

      <FilterProducts searchstring={input} list={list} />
    </Box>
  );
};
export default TextFieldSearchBar;