import React from "react";
import { useState, useEffect } from "react";
import { SUGGESTION_API } from "../utils/constant";
import user from "../assets/user.jpg";
import logo from "../assets/logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeStateOnClick } from "../utils/sidePanelStateSlice";
import { MenuOutlined } from "@ant-design/icons";
import { modeChange } from "../utils/themeSlice";
import { Switch } from 'antd';


const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  const [isFocus, setIsFocus] = useState(false);


  const dispatch=useDispatch()

  const theme=useSelector(store=>store.theme.mode);

  useEffect(()=>{
    if(theme==="dark"){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])

  const handleTheme=()=>{
    (theme==="dark")?dispatch(modeChange("light")):dispatch(modeChange("dark"));
  }
  

  // useEffect(() => {
  //   const timeout = setTimeout(getSuggestionList, 200);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [searchValue]);

  const navigate = useNavigate();
  const handleOnClick = (searchValue) => {
    console.log(`/search/${searchValue}`);
    navigate(`/search/${searchValue}`);
  };
  // const handleOnEnter = (searchValue) => {
  //   console.log(`/search/${searchValue}`);
  //   navigate(`/search/${searchValue}`);
  // };

  const handleOnClickHamburger=()=>{
    dispatch(changeStateOnClick())

  }
  const getSuggestionList = async () => {
    const suggestionData = await fetch(SUGGESTION_API + searchValue);
    const suggestionJson = await suggestionData.json();
    setSuggestionList(suggestionJson[1]);
  };
  return (
    <div className="grid shadow-md grid-flow-col fixed bg-white w-screen dark:bg-black dark:text-white"  >
      <div className="flex">
        <MenuOutlined className="h-12 w-12 mt-4 p-2 " onClick={()=>handleOnClickHamburger()}/>
        <a href="/">
          <img className="mt-4 h-8 w-28" alt="logo" src={logo} />{" "}
        </a>
      </div>
      <div
        className=" m-3 flex"
       
      >
        <div  className='relative'  onBlur={() => setIsFocus(false)} 
            onFocus={() => setIsFocus(true)}
            >
          <input
            type="text"
            className="border border-slate-500 rounded-l-full w-[25rem] p-2 dark:text-white dark:bg-white/[0.05] dark:border-white[0.15]"
            placeholder="Search"
            value={searchValue}
            onKeyDown={(e)=>((e.key==="Enter")?handleOnClick(searchValue):null)}
            onChange={(e) => setSearchValue(e.target.value)}
            
            
          />
           {/* { isFocus && suggestionList.length > 0 && (
          <div >
            <ul className="absolute bg-white w-[25rem] border-gray-300 rounded-lg shadow-sm ml-2 p-2">
              {suggestionList.map((suggestion, index) => (
                <Link to="/search/namaste">
                <li
                  className=" hover:bg-slate-200 rounded-lg p-2"
                  
                > {" 🔍 " + suggestion}
                </li>
                </Link>
              ))}
            </ul>
          </div>
        )} */}
        </div>

<button className="border border-slate-500 rounded-r-full w-16 p-2 bg-slate-100 dark:bg-white/[0.15]" onClick={()=>handleOnClick(searchValue)}>
            🔍
          </button>
      </div>

      <div className=" w-full  flex justify-end ">
     
      <div className="mr-6 mt-4">
      🌑 <Switch size="small" onClick={handleTheme}/> ☀️
     </div >
        <a href="https://github.com/asinghrajput542">
          <img className="rounded-full h-11 m-2" alt="user" src={user} />
        </a>
       
      </div>
    </div>
  );
};

export default Header;
