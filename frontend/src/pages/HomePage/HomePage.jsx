import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./homePage.css";
// import MapSample from "../../assets/images/map_sample/map_sample_1-1.jpg"
import MapSample2 from "../../assets/images/map_sample/map_sample_home.jpg";

function HomePage() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#141414",
      },
    },
  });
  return (
    <section className="homepage_Container Global_height">
      <p className="intro_text_homePage">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit
        metus nec finibus faucibus. Phasellus in nunc ex. In efficitur massa
        tortor, sed mollis justo efficitur vitae.{" "}
      </p>
      <div className="map_homePage_container">
        <img src={MapSample2} alt="map" className="map_homePage" />
      </div>
      <div className="cardinal_buttons_line">
        <ThemeProvider theme={theme}>
          <Stack spacing={2} direction="row">
            <Button variant="outlined" color="primary">
              NORTH
            </Button>
            <Button variant="outlined">SOUTH</Button>
            <Button variant="outlined">EAST</Button>
            <Button variant="outlined">WEST</Button>
          </Stack>
        </ThemeProvider>
      </div>
    </section>
  );
}

export default HomePage;
