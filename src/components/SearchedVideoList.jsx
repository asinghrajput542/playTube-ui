import React, { useEffect, useState } from "react";
import { CATAGORY_FILTER_PREFIC, VIDEO_LIST_URL } from "../utils/constant";
import SearchVideoCard from "./SearchVideoCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchedVideoList = () => {
  const pathParam = useParams();
  const category = pathParam?.search;
  const [searchVideosList, setSearchVideosList] = useState([]);
  useEffect(() => {
    getVideoList();
  }, [category]);
  const theme = useSelector((store) => store.theme.mode);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const getVideoList = async () => {
    const videoData = await fetch(
      VIDEO_LIST_URL + CATAGORY_FILTER_PREFIC + category
    );
    const videoJson = await videoData.json();
    setSearchVideosList(videoJson.items);
  };
  return (
    searchVideosList.length > 0 && (
      <div className="dark:bg-black dark:text-white h-[100%]">
        {searchVideosList.map((video) => (
          <Link to={"/watch?v=" + video?.id?.videoId} key={video?.id?.videoId}>
            {" "}
            <SearchVideoCard info={video} />{" "}
          </Link>
        ))}
        ;
      </div>
    )
  );
};

export default SearchedVideoList;
