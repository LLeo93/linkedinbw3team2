import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserProfile() {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDc3M2Q0NTE4MTAwMTVjZTgzY2UiLCJpYXQiOjE3NDUzMDc1MDcsImV4cCI6MTc0NjUxNzEwN30.u0YJhaM-DckuqeyqScIIgbQsaBB7E5H9SBDxS4Wj5mE",
          },
        }
      );
      const data = await res.json();
      setProfile(data);
    };

    fetchProfile();
  }, [userId]);

  if (!profile) return <p>Caricamento...</p>;

  return (
    <div className="container mt-4">
      <h2>
        {profile.name} {profile.surname}
      </h2>
      <p>
        <strong>{profile.title}</strong>
      </p>
      <p>{profile.bio}</p>
      <p>
        <em>{profile.area}</em>
      </p>
      <img src={profile.image} alt="profile" width={120} className="rounded" />
    </div>
  );
}

export default UserProfile;
