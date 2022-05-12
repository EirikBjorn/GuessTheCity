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
import { gameModes as games } from "../data/gamemodes";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{
          ul: {
            margin: 0,
            padding: 0,
            listStyle: "none",
          },
        }}
      />
      <CssBaseline />
      <br></br>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {games.map((game) => (
            <Grid
              item
              key={game.title}
              xs={12}
              sm={game.title === "Suggested" ? 12 : 6}
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
                  <Link
                    className="playLink"
                    to={{
                      pathname: "/game/?gamemode=" + game.restCall,
                    }}
                    state={{ data: game.restCall }}
                  >
                    {!game.disabled ? (
                      <Button fullWidth color="btnColor" variant="contained">
                        PLAY
                      </Button>
                    ) : (
                      <Button
                        disabled
                        fullWidth
                        color="btnColor"
                        variant="contained"
                      >
                        Coming Soon
                      </Button>
                    )}
                  </Link>
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
