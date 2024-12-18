import React from "react";
import { useGetUsersQuery } from "../../redux/api/Authorization";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function Userpage() {
  const { data, isLoading } = useGetUsersQuery();

  const navigate = useNavigate();
  return (
    <div className="h-[100vh] items-center flex justify-center">
      <div className="flex flex-col gap-3">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div >
            <p className="text-center text-[22px] font-normal"> {data.name}</p>
            <img src={data.avatar} alt="data" />
            <Button className="w-full mt-3"
              variant="filled"
              onClick={() => navigate("/")}
              color="danger"
            >
              LogOut
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Userpage;
