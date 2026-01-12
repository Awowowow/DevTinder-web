import React from "react";
import UserCard from "./UserCard";

const PreviewPanel = ({userData}) => {
  if(!userData) return;
  const {firstName,description, lastName, age, skills, gender,  photoUrl} = userData;
  return (
    <div className="flex justify-center items-start">
      <UserCard
        user={{
          firstName: firstName ,
          lastName: lastName,
          age: age,
          description: description,
          photoUrl:photoUrl,
          skills: skills,
          gender: gender,
        }}
      />
    </div>
  );
};

export default PreviewPanel;
