import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import axios from "axios";
import OrderDetails from "../ShippedOrderPage/OrderDetails";
const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [shippedon,setShippedon]=useState(false);

  useEffect(() => {
    setLoading(true);

    if (user) {
      
      const userEmail = user.email;
      const fetchUserProfile = async () => {
        try {
          const response = await axios.get(`http://localhost:5001/api/v1/user/singleByEmail/${userEmail}`);
          if (response.data.success) {
            setProfile(response.data.user);
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchUserProfile();
    }
  }, [user]);

  if (loading) return <Loading />;

  return (
   <>
     <div
      data-aos="fade-up mt-5"
      data-aos-anchor-placement="center-bottom"
      className="my-5 card p-5 lg-w-50 mx-auto"
    >
      <div className="d-flex gap-3">
        <span>Role:</span>
        <span>{profile?.role}</span>
      </div>
      <div className="d-flex gap-3">
        <span>Name:</span>
        <span>{profile?.name}</span>
      </div>
      <div className="d-flex gap-3">
        <span>Email:</span>
        <span>{profile?.email}</span>
      </div>

    </div>
      <button onClick={()=>setShippedon(!shippedon)}>Shipped order page</button>
      {shippedon && (
        <OrderDetails/>
      )}
   </>
  );
};

export default MyProfile;
