import { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";

const items = [
  { idx: 1 },
  { idx: 2 },
  { idx: 3 },
  { idx: 4 },
  { idx: 5 },
  { idx: 6 },
  { idx: 7 },
  { idx: 8 },
  { idx: 9 },
  { idx: 10 },
];

export default function Select() {
  const navigate = useNavigate();
  const [group, setGroup] = useState<{ idx: number; select: boolean }[] | []>(
    []
  );

  useEffect(() => {
    items.map((item, index) => {
      if (index === 0) setGroup([{ idx: item.idx, select: false }]);
      else setGroup((prev) => [...prev, { idx: item.idx, select: false }]);
    });
  }, []);

  useEffect(() => {
    console.log(group);
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
              : group.map((item, idx) => (
                  <div
                    key={item.idx}
                    className={`bg-white rounded-2xl aspect-[3/4] cursor-pointer hover:opacity-80 ${
                      item.select ? "border border-[#3B69F5] border-[10px]" : ""
                    }`}
                    onClick={() =>
                      setGroup((prev) => {
                        const prevData = [...prev];
                        prevData[idx] = {
                          ...prev[idx],
                          select: !prev[idx].select,
                        };

                        console.log(prevData);
                        return prevData;
                      })
                    }
                  />
                ))}
          </div>
          <div className="text-center text-white py-3 my-6 cursor-pointer hover:bg-white/10">
            더보기
          </div>
          <div className="text-center">
            <Spinner />
          </div>
        </div>
      </div>
      <div
        className="bg-[#C0EA74] flex gap-3 fixed bottom-10 right-10 md:right-[20%] pl-6 pr-6 py-3 rounded-full cursor-pointer hover:bg-[#ccdcae]"
        onClick={() => navigate("/result")}
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
