import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./userCard";
import FeedShimmer from "./FeedShimmer";


const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getFeed = async () => {
    if (feed && feed.length > 0) {
      setIsLoading(false)
    };
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching feed:", err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <FeedShimmer />
      </div>
    );
  }


  if (!feed || feed.length === 0) return null;

  if (currentIndex >= feed.length) {
    return <div className="text-center mt-10">No more users</div>;
  }
  

  return (
    <div className="flex justify-center">
      <UserCard key={feed[currentIndex]._id} user={feed[currentIndex]} />
    </div>
  );
};

export default Feed;
