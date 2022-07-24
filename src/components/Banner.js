import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import requests from "../api/requests";
import "./Banner.css";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보 가져오기(여러 영화)
    const request = await axios.get(requests.fetchNowPlaying);
    console.log(request);
    // 여러 영화 중 랜덤으로 영화 하나의 ID를 가져오기
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    // 특정 영화의 더 상세한 정보 가져오기(비디오 정보도 포함)
    // movieDetail안에 특정 영화 정보 데이터 넣기
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_reponse: "videos" },
    });
    setMovie(movieDetail);
  };

  // 설명 글자가 100넘어가면 ...표시
  const truncate = (str, num) => {
    // 0 ~ 100 - 1 = 99 짜르고 ... 붙히기
    return str?.length > num ? str.substr(0, num - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_title}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button info">More Information</button>
        </div>

        <h1 className="banner__description">{truncate(movie.overview, 80)} </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}
