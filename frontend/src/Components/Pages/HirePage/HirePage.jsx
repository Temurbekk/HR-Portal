import React from "react";
import HireForm from "../../Layout/HireForm";
import useFetch from "../../DataFetchers/useFetch";

const HirePage = (props) => {
  const { isLoading } = useFetch("/api/v1/employees/");
  return (
    <div>{isLoading ? <div>...Loading</div> : <HireForm path={props} />}</div>
  );
};

export default HirePage;
