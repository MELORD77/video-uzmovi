import React from "react";
import "./loading.css";
import { useNavigate } from "react-router-dom";
export default function Loading() {
  const navigate = useNavigate();
  // setTimeout(() => {
  //   navigate("/main");
  // }, 2000);
  return (
    <div className="Loading-body">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
