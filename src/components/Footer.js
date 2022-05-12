import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import { textAlign } from "@mui/system";

const footers = [
  {
    title: "Contact",
    description: [
      {
        text: "Github",
        link: "https://github.com/EirikBjorn",
      },
      {
        text: "Twitter",
        link: "https://twitter.com/Eiriiiik",
      },
      {
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/eirik-bj%C3%B8rneseth-a952a3142/",
      },
    ],
  },
  {
    title: "More like this",
    description: [
      {
        text: "Android App (coming soon)",
        link: "",
      },
      {
        text: "iOS App (coming soon)",
        link: "",
      },
      {
        text: "Guess the country (coming soon)",
        link: "",
      },
      {
        text: "Guess the flag (coming soon)",
        link: "",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
        position: "static",
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.link}
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
