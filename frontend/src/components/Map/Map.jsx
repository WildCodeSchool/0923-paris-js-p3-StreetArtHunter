import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./map.css";
import works from "../../../data_sample/data_works.json";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

function StreetMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = new mapboxgl.Marker({ color: "orange" });
  const [lng, setLng] = useState(2.3522);
  const [lat, setLat] = useState(48.8566);
  const [zoom, setZoom] = useState(11);

  const loadMarker = ({
    image,
    entry,
    userSub,
    artist,
    location,
    longitude,
    latitude,
  }) => {
    const popup = new mapboxgl.Popup()
      .setHTML(`<section className="workCard_container">
      <div className="workCard_resultcontent">
        <img width="100%" className="Work_image" src=${image} alt="work" />
        <div className="work_infos_container">
          <p className="work_info"> entry: ${entry}</p>
          <p className="work_info"> zone: ${location}</p>
          <p className="work_info"> loc: adresse rue + cp</p>
          <p className="work_info"> artist: ${artist}</p>
          <p className="work_info"> submitted by: ${userSub}</p>
        </div>
      </div>
    </section>`);

    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .setPopup(popup)
      .addTo(map.current);
  };

  const addMarker = (event) => {
    // trigger only for right mouse click
    if (event.originalEvent.button === 2) {
      const coordinates = event.lngLat;
      console.info("Lng:", coordinates.lng, "Lat:", coordinates.lat);
      marker.setLngLat(coordinates).addTo(map.current);
    }
  };

  useEffect(() => {
    if (map.current) return; // initialize map only once

    // initialize the map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom,
    });

    // add controls to the map (nav, fullscreen, geolocate)
    map.current.addControl(new mapboxgl.NavigationControl());
    map.current.addControl(new mapboxgl.FullscreenControl());
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );

    // generate search bar
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl,
      positionOptions: {
        top: "0px",
        left: "0px",
      },
      marker: { color: "orange" },
    });

    // on search bar remove previous marker and get lng/lat of the adress
    geocoder.on("result", (e) => {
      marker.remove();
      console.info(e.result.center);
    });

    // add the search bar on the map
    map.current.addControl(geocoder);

    // Allow move control on the map
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    // Add marker when click on the map
    map.current.on("mousedown", addMarker);

    // add marker from data
    for (const work of works) {
      loadMarker(work);
    }
  }, []);

  return <div ref={mapContainer} className="work_map_container" />;
}

export default StreetMap;
