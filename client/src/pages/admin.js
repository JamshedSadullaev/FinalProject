import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_JACKET } from "../utils/queries";

const Admin = () => {
    const {loading, data} = useQuery(QUERY_ALL_JACKET);
    const jacketList = data?.jacket || {}
    console.log(jacketList)
    if (loading) {
        return <h2>loading</h2>
    }
    return (
      <div className="container">
        admin page
        {jacketList?.map((jacket) => {
            return (
                <div>
            <h1>{jacket.name}</h1>

                </div>
            )
        })}
      </div>
    );
  };
  
  export default Admin;
  