import { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

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
        </div>
      </div>
      <div
        className="bg-[#C0EA74] fixed bottom-10 right-10 md:right-[20%] py-3 px-6 rounded-full cursor-pointer hover:bg-[#ccdcae]"
        onClick={() => navigate("/result")}
      >
        분석하기 &gt;
      </div>
    </div>
  );
}
