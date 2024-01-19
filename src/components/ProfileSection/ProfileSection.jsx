import React from "react";
import profileimg from "../../Assets/imgs/Bitmap.png";
import "./ProfileSection.scss"
const ProfileSection = () => {
  return (
    <div className="profile-section" >
      <div className="profile-container">
        <div className="image-container">
          <img src={profileimg} alt="p" className="profile-image" />
        </div>
        <div  className="Text-container">
            <p >Report for</p>
              <p >Best</p>
              <p >Sales</p>
              <p className="mobileCView">Best Sales</p>
            

        </div>
      </div>

      <div  className="rest-of-div">
        <p >Daily</p>
        <p >Weekly</p>
        <p >Monthly</p>
      </div>
    </div>
  );
};

export default ProfileSection;
