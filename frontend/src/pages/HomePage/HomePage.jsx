import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./homePage.css";
// import MapSample from "../../assets/images/map_sample/map_sample_1-1.jpg"
import MapSample2 from "../../assets/images/map_sample/map_sample_home.jpg";

function HomePage() {
  return (
    <section className="homepage_Container">
      <p className="intro_text_homePage">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit
        metus nec finibus faucibus. Phasellus in nunc ex. In efficitur massa
        tortor, sed mollis justo efficitur vitae.{" "}
      </p>
      <img src={MapSample2} alt="map" className="map_homePage" />
      <div className="cardinal_button_line">
        <Stack spacing={2} direction="row">
          <Button variant="outlined">NORTH</Button>
          <Button variant="outlined">SOUTH</Button>
          <Button variant="outlined">EAST</Button>
          <Button variant="outlined">WEST</Button>
        </Stack>
      </div>
    </section>
  );
}

export default HomePage;
