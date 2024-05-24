import React from "react";

const DynamicBlog = ({ params }) => {
  return <pre>{JSON.stringify(params)}</pre>;
};

export default DynamicBlog;
