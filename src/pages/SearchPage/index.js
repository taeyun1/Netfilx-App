import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  // console.log("useLocation()", useLocation());

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  // 검색창에 검색한 값을 가져옴
  // ex) search?q=hello => q 뒤에 hello값만 가져옴
  let query = useQuery();

  const searchTerm = query.get("q");
  // console.log("searchTerm", searchTerm);

  // searchTerm이 바뀔때마다. 즉, 검색어를 입력할때마다 영화 데이터 가져오기
  useEffect(() => {
    if (searchTerm) {
      fetchSearchMoive(searchTerm);
    }
  }, [searchTerm]);

  // 검색한 영화의 results값 만 setSearchResults에 저장
  const fetchSearchMoive = async (searchTerm) => {
    try {
      const req = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      // console.log(req);
      setSearchResults(req.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  return <div>SearchPage</div>;
}
