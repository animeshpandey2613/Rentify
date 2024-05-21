// Blocks.jsx
import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import "./Blocks.css";
import Swal from "sweetalert2";
import CatchAsyncError from "../../utils/CatchAsyncError";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
function Blocks() {
  const [blocksData, setBlocksData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = CatchAsyncError(async () => {
      try {
        const data = await axios.get("http://localhost:8000/api/property");
        setBlocksData(data.data.data);
        // setLoading(true);
        console.log(blocksData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(true);
      }
    });
    fetchData();
  }, []);
  const OwnerSendEmail = CatchAsyncError(async (owner) => {
    if(localStorage.getItem("phoneNumber")){
      Swal.fire({
        title: "<strong>Owner Information</u></strong>",
        icon: "info",
        html: `Please contact owner through his phone number: ${owner.ownerNumber}
        `,
        showCloseButton: true,
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Great!
        `,
      });
      const temp = {
        phoneNumberUser1: localStorage.getItem("phoneNumber"),
        phoneNumberUser2: owner.ownerNumber,
      };
      const data = await axios.post(
        "http://localhost:8000/api/users/contactuser",
        temp
      );
  
      Swal.fire({
        title: "Email sent to the owner",
      });
    }
    else{
      throw new Error("Please login to continue");
    }
  });

  return (
    <div className="BlocksContainer1">
      <div className="BlocksMainHeading underline">Featured Properties</div>
      <div className="BlocksContainer">
        {loading &&
          blocksData.map((ele) => (
            <div key={ele.id} className="BlocksMainContainer">
              <div className="CarouselArea">
                <Carousel />
              </div>
              <div className="Description">
                <div className="rooms">{ele.optionsBhk}</div>
                <div className="pair">
                  <div className="label">Area:</div>
                  <div className="info">{ele.area} sqft</div>
                </div>
                <div className="pair">
                  <div className="label">Address:</div>
                  <div className="info">{ele.address}</div>
                </div>
                <div className="pair">
                  <div className="label">Address:</div>
                  <div className="info">{ele.address}</div>
                </div>
                <div className="buttonArea">
                  <div
                    className="button"
                    onClick={() => {
                      OwnerSendEmail(ele);
                    }}
                  >
                    I am Intrested
                  </div>
                  <div className="heartArea">
                    {ele.liked ? <FaHeart /> : <FaRegHeart />}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Blocks;
