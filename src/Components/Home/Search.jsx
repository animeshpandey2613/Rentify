import React, { useState } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
function Search() {
  const handleSubmit = () => {};
  const handleChange = () => {
    setSidebardata({
      searchTerm: "",
      type: "all",
      parking: false,
      furnished: false,
      offer: false,
      sort: "created_at",
      order: "desc",
    });
  };
  const [sidebardata, setSidebardata] = useState({
    searchTerm: "",
    type: "all",
    parking: false,
    furnished: false,
    offer: false,
    sort: "created_at",
    order: "desc",
  });
  const [Filter, setFilter] = useState(false);
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-8 justify-center mt-28">
        <div className="flex items-center gap-2">
          <label className="whitespace-nowrap font-semibold">
            Search Property
          </label>
          <input
            type="text"
            id="searchTerm"
            placeholder="Search..."
            className="border rounded-lg p-3 w-full"
            value={sidebardata.searchTerm}
            onChange={handleChange}
          />
        </div>
        {Filter && (
          <>
            <div className="flex gap-2 flex-wrap items-center">
              <label className="font-semibold">Type:</label>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="1BHK"
                  className="w-5"
                  onChange={handleChange}
                  checked={sidebardata.type === "1BHK"}
                />
                <span>1BHK</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="2BHK"
                  className="w-5"
                  onChange={handleChange}
                  checked={sidebardata.type === "2BHK"}
                />
                <span>2BHK</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="3BHK"
                  className="w-5"
                  onChange={handleChange}
                  checked={sidebardata.type === "3BHK"}
                />
                <span>3BHK</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="4BHK"
                  className="w-5"
                  onChange={handleChange}
                  checked={sidebardata.type === "4BHK"}
                />
                <span>4BHK</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <label className="font-semibold">Sort:</label>
              <select
                onChange={handleChange}
                defaultValue={"created_at_desc"}
                id="sort_order"
                className="border rounded-lg p-3"
              >
                <option value="regularPrice_desc">Price high to low</option>
                <option value="regularPrice_asc">Price low to hight</option>
                <option value="createdAt_desc">Latest</option>
                <option value="createdAt_asc">Oldest</option>
              </select>
            </div>
          </>
        )}

        <button className="button">Search</button>
        <div
          className="button"
          onClick={() => {
            setFilter((ele) => !ele);
          }}
        >
          <HiAdjustmentsHorizontal />
        </div>
      </form>
    </div>
  );
}

export default Search;
