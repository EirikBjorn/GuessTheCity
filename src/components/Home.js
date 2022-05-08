import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

const games = [
  {
    title: "Large Cities",
    difficulty: "1 ",
    subheader: "Most popular",
    description: "Cities with a population of more than 5 million",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "Primate cities",
    difficulty: "3 ",
    subheader: "Most popular",
    description: "A Primate city is the largest city in a country",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "All Cities",
    difficulty: "5 ",
    subheader: "Most popular",
    description: "All cities with a population of more than 500k",
    image:
      "https://images.unsplash.com/photo-1613567993548-b3a0d9abb736?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1941&q=80",
  },
];

export const Home = () => {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        ></Typography>
        <Typography variant="h5" align="center" component="p">
          Choose a game
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {games.map((game) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={game.title}
              xs={12}
              sm={game.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card
                sx={{
                  backgroundColor: (theme) => theme.palette.card,
                }}
              >
                <CardHeader
                  title={game.title}
                  subheader={`Difficulty: ${game.difficulty} / 5`}
                  titleTypographyProps={{ align: "center" }}
                  action={game.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) => theme.palette.card,
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      sx={{
                        backgroundColor: (theme) => theme.palette.card,
                      }}
                    >
                      <Box
                        component="img"
                        sx={{
                          height: 233,
                          width: 350,
                          maxHeight: { xs: 233, md: 167 },
                          maxWidth: { xs: 350, md: 250 },
                        }}
                        src={game.image}
                      />
                    </Typography>
                  </Box>
                  <p>{game.description}</p>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    onClick={() => {}}
                    color="btnColor"
                    variant="contained"
                  >
                    PLAY
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Home;
