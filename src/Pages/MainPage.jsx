import trackList from "../assets/trackList";
import Track from "../components/Track";
import style from "./MainPage.module.scss";
import { Input } from "@mui/material";
import { useState } from "react";

const runSearch = (query) => {
  if (!query) {
    return trackList
  }

  const lowerCaseQuery = query.toLowerCase()

  return trackList.filter((track) => 
  track.title.toLocaleLowerCase().includes(lowerCaseQuery) ||
  track.artists.toLocaleLowerCase().includes(lowerCaseQuery))
}

const MainPage = () => {

  const [tracks, setTracks] = useState(trackList)

  const handleChange = (event) => {
    const foundTracks = runSearch(event.target.value)
    setTracks(foundTracks)
  }

  return (
    <div className={style.search}>
      <Input
        className={style.input}
        placeholder="Поиск треков"
        onChange={handleChange}
      ></Input>
      <div className={style.list}>
        {tracks.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
