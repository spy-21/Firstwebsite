import React, { useEffect } from "react";

const Music = () => {
  const token =
    "BQCK70F_f8lIKfs-TQfA4KVBC59c6WhIdOyL975YaMOI3MbLEPkHH3Mt_qwJzoh3Alu1wHGApEu5VRLE8L_2Rj4qN8PAA-z9_w2DgurqJ45bGhi5gimZ__OvZ0HYN-BkLV4KxCjHgEB2m7GfOW8pz9DYxflcw-BDvRWnacFe8AjhxYmitskew_rouIeZ-NsvRMjXosPEhML97iuBMPlrfl5TLHFwR1MbxXiM3fUbR5gwENNUPX1q3bIRclVghSCkknbPLfKCDrVkmZ-glzw-nhQ0xexMWwHgHa5mDv_IizZRPjNNaVwgkeM6jDJq";

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch top tracks");
        }

        const data = await response.json();
        const formattedTracks = data.items.map(
          ({ name, artists }) =>
            `${name} by ${artists.map((artist) => artist.name).join(", ")}`
        );
        console.log("Top Tracks:", formattedTracks);
      } catch (error) {
        console.error("Error fetching top tracks:", error.message);
      }
    };

    fetchTopTracks();
  }, []);

  return <div>Music Component</div>;
};

export default Music;
