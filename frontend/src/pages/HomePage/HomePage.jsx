import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./homePage.css";
import MapSample from "../../assets/images/map_sample/map_sample_1-1.jpg";
import MapSample2 from "../../assets/images/map_sample/map_sample_home.jpg";
import KidCompass from "../../assets/images/img/Anonym_boussole.png";

function HomePage() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#141414",
      },
    },
    typography: {
      button: {
        fontFamily: "Black Ops One",
      },
    },
  });
  // gestion Media Screen //
  const smartphoneScreen = window.matchMedia("(max-width: 770px)").matches;
  const desktopScreen = window.matchMedia("(min-width: 1440px)").matches;

  // >>> return <<< //
  return (
    <section className="homepage_Container Global_height">
      <div className="kidCompass_container">
        <img
          src={KidCompass}
          alt="kid compass"
          className="KidCompass KidCompass_right"
        />
      </div>
      <section className="Homepage_central">
        <div className="homepage_intro_content">
          <h1 className="intro_title_homePage">the urban art cartographers</h1>
          {smartphoneScreen && (
            <p className="intro_text_homePage">
              Explore the walls of your city <br /> and share what you see.
            </p>
          )}
          {desktopScreen && (
            <p className="intro_text_homePage">
              Explore the walls of your city and share what you see.
            </p>
          )}
        </div>
        {smartphoneScreen && (
          <div className="map_homePage_container">
            <img src={MapSample} alt="map" className="map_homePage" />
          </div>
        )}
        {desktopScreen && (
          <div className="map_homePage_container">
            <img src={MapSample2} alt="map" className="map_homePage" />
          </div>
        )}
        <div className="cardinal_buttons_line">
          {smartphoneScreen && (
            <ThemeProvider theme={theme}>
              <Stack spacing={2} direction="row">
                <Button variant="outlined" color="primary" size="small">
                  NORTH
                </Button>
                <Button variant="outlined" color="primary" size="small">
                  SOUTH
                </Button>
                <Button variant="outlined" color="primary" size="small">
                  EAST
                </Button>
                <Button variant="outlined" color="primary" size="small">
                  WEST
                </Button>
              </Stack>
            </ThemeProvider>
          )}
          {desktopScreen && (
            <ThemeProvider theme={theme}>
              <Stack spacing={2} direction="row">
                <Button variant="outlined" color="primary" size="large">
                  NORTH
                </Button>
                <Button variant="outlined" color="primary" size="large">
                  SOUTH
                </Button>
                <Button variant="outlined" color="primary" size="large">
                  EAST
                </Button>
                <Button variant="outlined" color="primary" size="large">
                  WEST
                </Button>
              </Stack>
            </ThemeProvider>
          )}
        </div>
      </section>
      <div className="kidCompass_container">
        <img src={KidCompass} alt="kid compass" className="KidCompass" />
      </div>
    </section>
  );
}

export default HomePage;
