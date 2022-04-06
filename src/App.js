import React, { useState, useEffect } from "react";
import axios from "axios";

import Pagination from "./Pagination";
import Posts from "./Posts";
import "./App.css";

const App = () => {
  const dataPerpage = 8;

  const [totalPage, setTotalPage] = useState(1);
  const [dataCount, setDataCount] = useState(0);
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setDataCount(data.length);
      setData(data);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    setTotalPage(Math.ceil(dataCount / dataPerpage));
  }, [dataCount, dataPerpage]);

  useEffect(()=> {
    const dataset = data.slice((currentPage*dataPerpage - dataPerpage), currentPage*dataPerpage);
    setShowData(dataset);
  }, [data, currentPage, dataPerpage]);

  const onNext = () => {
    if (currentPage === totalPage) return;
    setCurrentPage(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {isLoading ? <div>Loading...</div> : <Posts data={showData} />}

      <Pagination
        totalPage={totalPage}
        onNext={onNext}
        onPrevious={onPrevious}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default App;
