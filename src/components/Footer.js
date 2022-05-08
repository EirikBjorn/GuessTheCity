import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

const footers = [
  {
    title: "Contact",
    description: ["Mail", "Github", "LinkedIn", "Suggestion box"],
  },
  {
    title: "More like this",
    description: [
      "Android App (coming soon)",
      "iOS App (coming soon)",
      "Guess the country (coming soon)",
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
        position: "absolute",
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
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="text.secondary">
                    {item}
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
