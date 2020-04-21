import React from "react";
import AdmitForm from "../../Util/AdmitForm";
import useFetch from "../../DataFetchers/useFetch";

const HirePage = (props) => {
  const { isLoading } = useFetch("/api/employees");
  return (
    <div>{isLoading ? <div>...Loading</div> : <AdmitForm path={props} />}</div>
  );
};

export default HirePage;
