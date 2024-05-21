import React from "react";
import Navbar from "../Components/Common/Navbar";
import Search from "../Components/Home/Search";
import Blocks from "../Components/Home/Blocks";
function Home() {
  return (
    <div>
      <Navbar />
      <Search />
      <Blocks />
    </div>
  );
}

export default Home;
