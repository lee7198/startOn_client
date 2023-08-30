import { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
// import Spinner from "../../components/Spinner";
// import { ContextInterface } from "../..";
import axios from "axios";
import { movieItems } from "./data";

export default function Select() {
  const navigate = useNavigate();
  // const { state, setState } = useOutletContext<ContextInterface>();
  const [group, setGroup] = useState<
    | {
        idx: number;
        title: string;
        url: string;
        select: boolean;
        type: "music" | "movie";
      }[]
    | []
  >([]);

  const getCover = async () => {
    const response = await axios
      .get("/cover/", {
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
          Accept: "application/json", // JSON 응답을 요청하기 위해 Accept 헤더 추가
          "Access-Control-Allow-Origin": "*",
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((res) => {
        console.log(res);
        return res;
      });
    return response.data;
  };

  const getResearch = () => {
    const params: number[] = [];
    group.map((item, idx) => {
      const sum = params.reduce((a, b) => a + b, 0);
      if (idx < 3 && sum !== 100) {
        return item.select ? params.push(30) : params.push(15);
      }
      // 45 60 75 90
      if (sum === 45) {
        params[0] += 25;
        params[1] += 10;
        params[2] += 20;
      }
      if (sum === 60) {
        params[0] += 15;
        params[1] += 5;
        params[2] += 20;
      }
      if (sum === 75) {
        params[0] += 3;
        params[1] += 12;
        params[2] += 10;
      }
      if (sum === 90) {
        params[0] += 1;
        params[1] += 5;
        params[2] += 4;
      }

      return;
    });
    const url = `/loading/?param=15,30,55,1,50,49,`;
    console.log(url + params.toString());
    navigate(url + params.toString());
  };

  useEffect(() => {
    getCover().then((res_) => {
      const res = JSON.parse(res_);
      console.log(res);
      res.map((item, index) => {
        if (index === 0)
          setGroup([
            {
              idx: item.idx,
              title: item.title,
              url: item.image,
              select: false,
              type: "music",
            },
          ]);
        else
          setGroup((prev) => [
            ...prev,
            {
              idx: item.idx,
              title: item.title,
              url: item.image,
              select: false,
              type: "music",
            },
          ]);
      });
      movieItems.map((item) => {
        setGroup((prev) => [
          ...prev,
          {
            idx: item.idx,
            title: item.title,
            url: item.url,
            select: false,
            type: "movie",
          },
        ]);
      });
    });
  }, []);

  useEffect(() => {
    // console.log(group);
  }, [group]);

  return (
    <div className="container mx-auto max-w-screen-sm py-10">
      <div className="w-[90%] mx-auto">
        <div className="text-white font-thin pb-6">
          후투티님의 취향을 분석하여 픽스해드려요!
        </div>
        <div className="selection_section">
          <div className="text-white text-4xl font-bold pb-10">
            🎥 당신의 영화를 픽!
          </div>
          <div className="grid grid-cols-3 gap-4 posters">
            {group.length === 0
              ? "loading..."
              : group.map((item, idx) => {
                  if (item.type !== "movie") return;
                  return (
                    <div
                      key={item.idx}
                      className={`bg-white rounded-2xl aspect-[3/4] cursor-pointer hover:opacity-80 bg-no-repeat bg-cover bg-center ${
                        item.select
                          ? "border border-[#3B69F5] border-[10px]"
                          : ""
                      }`}
                      style={{ backgroundImage: `url(${item.url})` }}
                      onClick={() =>
                        setGroup((prev) => {
                          const prevData = [...prev];
                          prevData[idx] = {
                            ...prev[idx],
                            select: !prev[idx].select,
                          };

                          // console.log(prevData);
                          return prevData;
                        })
                      }
                    />
                  );
                })}
          </div>
          <div className="text-center text-white py-3 mt-40 mb-20 cursor-pointer hover:bg-white/10">
            더보기
          </div>
          {/* <div className="text-center">
            <Spinner />
          </div> */}
        </div>
        <div className="selection_section">
          <div className="text-white text-4xl font-bold pb-10">
            🎧 당신의 음악를 픽!
          </div>
          <div className="grid grid-cols-3 gap-4 posters">
            {group.length === 0
              ? "loading..."
              : group.map((item, idx) => {
                  if (item.type !== "music") return;
                  return (
                    <div
                      key={item.idx}
                      className={`bg-white rounded-2xl aspect-[3/4] cursor-pointer hover:opacity-80 bg-no-repeat bg-cover bg-center ${
                        item.select
                          ? "border border-[#3B69F5] border-[10px]"
                          : ""
                      }`}
                      style={{ backgroundImage: `url(${item.url})` }}
                      onClick={() =>
                        setGroup((prev) => {
                          const prevData = [...prev];
                          prevData[idx] = {
                            ...prev[idx],
                            select: !prev[idx].select,
                          };

                          // console.log(prevData);
                          return prevData;
                        })
                      }
                    />
                  );
                })}
          </div>
          <div className="text-center text-white py-3 mt-40 cursor-pointer hover:bg-white/10">
            더보기
          </div>
          {/* <div className="text-center">
            <Spinner />
          </div> */}
        </div>
      </div>
      <div
        className="bg-[#C0EA74] flex gap-3 fixed bottom-10 right-10 md:right-[20%] pl-6 pr-6 py-3 rounded-full cursor-pointer hover:bg-[#ccdcae]"
        onClick={getResearch}
      >
        <span>분석하기</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#000"
            viewBox="0 0 256 256"
          >
            <path d="M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"></path>
          </svg>
        </span>
      </div>
    </div>
  );
}
