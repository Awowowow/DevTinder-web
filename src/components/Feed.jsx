import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";
import FeedShimmer from "./FeedShimmer";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data.data || []));
    } catch (err) {
      console.error("Error fetching feed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  useEffect(() => {
    if (!feed || feed.length === 0) {
      setCurrentIndex(0);
    }
  }, [feed]);
  
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <FeedShimmer />
      </div>
    );
  }

  if (!Array.isArray(feed) || feed.length === 0) {
    return <div className="text-center mt-10">No users found</div>;
  }

  const currentUser = feed?.[currentIndex];

if (!currentUser || !currentUser._id) {
  return <div className="text-center mt-10">No more users</div>;
}

return (
  <div className="flex justify-center">
    <UserCard key={currentUser._id} user={currentUser} />
  </div>
);
};

export default Feed;
