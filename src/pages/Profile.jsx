import React from 'react';
import { useParams } from 'react-router-dom';
import { totalChildren } from "../data";


const Profile = () => {
    const { childId } = useParams();  // Use the useParams hook to get the personId from the URL

    // Find the person object from the data based on the personId
  const child = totalChildren.find((child) => child.id === parseInt(childId));

  
  // Check if the person exists
  if (!child) {
    return <div>Child not found.</div>;
  }

  return (
    <div>
         <h2>{child.name}'s Profile</h2>

    </div>
  )
}

export default Profile