import { useEffect, useState } from "react";

import { ReactComponent as Logo1 } from "./icons/boat.svg";
import { ReactComponent as Logo2 } from "./icons/profile.svg";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

import "./App.scss";
import axios from "axios";

function App() {
  var [videos, setVideos] = useState(null);
  var [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      var response = await axios.get(
        "https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=test&numResults=100"
      );

      var data = response.data.results;

      setVideos({ videos: data });

      if (searchField.searchField !== "" && videos !== null) {
        var filtered = videos.videos.filter((video) =>
          video.tags[0]
            .toLowerCase()
            .includes(searchField.searchField.toLowerCase())
        );

        setVideos({ videos: filtered });
      }
    };

    fetchData();
  }, [searchField]);

  const handleChange = (e) => {
    setSearchField({ searchField: e.target.value });
  };

  if (videos === null) return <h1>Loading</h1>;
  else
    return (
      <div className="App">
        <div className="header">
          <Logo1 className="logo" />
          <SearchBox placeholder="Search Videos" handleChange={handleChange} />
          <Logo2 className="logo hide" />
        </div>
        <div className="section">
          <CardList videos={videos} />
        </div>
      </div>
    );
}

export default App;
