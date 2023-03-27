import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

type Props = {};

export default (props: Props) => {
  return (
    <Box component="div" sx={{ p: 3 }}>
      <hr></hr>
      <Grid container className="custom-grid" sx={{maxWidth:'1000px'}}>
        <Grid item xs={12} md={6} sm={6}>
          <Box component="div" sx={{justifyContent: 'center', alignItems: 'center'}} className="footer-logo">
            <img
              src="images/Untitled-design.svg"
              style={{
                width: "35px",
                height: "35px",
                color: "white",
                filter:
                  "invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(133348%) contrast(119%)",
                border: "1px solid white",
                borderRadius: "100rem",
              }}
            ></img>
            <p>Nabi OZER</p>
          </Box>
          <Box component="div" className="footer-socials">
            <a
              href="https://github.com/nabiozer"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://github.com/nabiozer"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a
              href="https://github.com/nabiozer"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-medium"></i>
            </a>
            <a
              href="https://github.com/nabiozer"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sm={6} sx={{textAlign:'center',marginTop:'1rem'}}>
            <h4 style={{marginLeft:'1.7rem'}}>Links</h4>
              <ul className="footer-list">
                <li>Docs</li>
                <li>Privacy</li>
              </ul>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
      <hr></hr>
      <Box component="div"><p>©  2022. Powered by Nabi OZER.</p></Box>
    </Box>
  );
};
