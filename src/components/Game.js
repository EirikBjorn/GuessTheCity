import React, { useState, useEffect } from "react";
import { getCities } from "../data/data";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import { autoComplete } from "../data/autoComplete";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";

export const Game = (props) => {
  const [input, setInput] = useState("");
  const [cityList, setList] = useState([]);
  const [curr, setCurr] = useState(0);
  const location = useLocation();
  const restCall = location.state?.data;
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const attemptsLeft = 3 - attempts;
  const failToast = () => {
    toast("You have " + attemptsLeft + " attempt(s) left", {
      position: "top-center",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: "warning",
    });
  };
  const errorToast = () => {
    toast("You failed :(", {
      position: "top-center",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: "error",
    });
  };
  const successToast = () => {
    toast("You got it!", {
      position: "top-center",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: "success",
    });
  };

  const set = async () => {
    setList(await getCities(restCall));
  };

  useEffect(() => {
    set();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let bucketUrl =
    "https://storage.googleapis.com/guessthecity-95a9b.appspot.com/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input) {
      let resp = await checkAnswer();
      if (resp.message) {
        successToast();
        setScore(score + 1);
        setAttempts(1);
        setInput("");
        if (curr === 4) {
          handleOpen();
        } else {
          setCurr(curr + 1);
        }
      } else {
        if (curr === 4 && attempts >= 3) {
          handleOpen();
        }
        if (attempts < 3) {
          failToast();
        }
        setAttempts(attempts + 1);
        failHandler();
        setInput("");
      }
    }
  };

  const failHandler = () => {
    if (attempts === 3) {
      errorToast();
      if (curr < 4) {
        setCurr(curr + 1);
      }
      setAttempts(1);
    }
  };

  const checkAnswer = async () => {
    let response = await fetch(
      //"http://localhost:8080/answer/" +
      "https://still-tundra-86630.herokuapp.com/answer/" +
        input.trim() +
        "/" +
        cityList[curr].rank
    );
    let data = await response.json();
    return data;
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <React.Fragment>
      <ToastContainer
        progressClassName="toastProgress"
        bodyClassName="toastBody"
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

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
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            You got {score} out of 5 correct!
          </Typography>
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <Link
              className="navLink"
              to={{
                pathname: "/",
              }}
            >
              <Button variant="contained">New Game</Button>
            </Link>
          </Typography>
        </Box>
      </Modal>
      <Container maxWidth="md" component="main">
        <div className="Game">
          <div className="cont">
            {cityList.length < 1 ? (
              <>
                Waking Server...
                <br></br>
                <br></br>
                <CircularProgress color="btnColor" />
              </>
            ) : (
              <Box
                className="gImg"
                component="img"
                src={bucketUrl + cityList[curr].rank + ".jpg"}
              />
            )}
          </div>
          <br></br>
          <form onSubmit={handleSubmit}>
            <Autocomplete
              open={open}
              onOpen={() => {
                if (input) {
                  setOpen(true);
                }
              }}
              onClose={() => setOpen(false)}
              inputValue={input}
              onInputChange={(e, value, reason) => {
                setInput(value);
                if (!value) {
                  setOpen(false);
                }
              }}
              freeSolo
              options={autoComplete.map((option) => option)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  id="outlined-basic"
                  label="Answer"
                  variant="outlined"
                  value={input}
                />
              )}
            />
            <br></br>
            <Button
              fullWidth
              type="submit"
              color="btnColor"
              variant="contained"
            >
              Answer
            </Button>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Game;
