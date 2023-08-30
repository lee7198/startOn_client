import { useEffect } from "react";
import Spinner from "../../components/Spinner";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Loading() {
  const navigate = useNavigate();

  const sch = useLocation().search;
  const params = new URLSearchParams(sch);
  const param = params.get("param");

  const getRecomend = async () => {
    const data = await axios
      .get("/mbti/" + param, {
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
          Accept: "application/json", // JSON 응답을 요청하기 위해 Accept 헤더 추가
          "Access-Control-Allow-Origin": "*",
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((response) => {
        return response.data; // response.data로 실제 데이터에 접근
      })
      .catch((error) => {
        console.log("error", error);
      });
    return data;
  };

  useEffect(() => {
    getRecomend().then((res_) => {
      const res = JSON.parse(res_);
      // console.log(JSON.parse(res));
      // console.log(
      //   `result/?mbti=${res.mbti}&title=${res.title}&genre=${res.genre}&img=${res.img}`
      // );
      navigate(
        `result/?mbti=${res.mbti}&title=${res.title}&genre=${res.genre}&img=${res.img}`
      );
    });
  }, []);

  return (
    <div className="h-[100svh] flex flex-col items-center justify-center ">
      <Spinner className="py-6 w-12" />
      <div className="text-white font-thin">분석중...</div>
    </div>
  );
}
