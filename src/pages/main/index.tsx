import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  return (
    <div className="h-[100svh] flex flex-col justify-around container mx-auto max-w-screen-sm py-10">
      <div>
        <div className="text-5xl font-bold text-center text-white">
          픽스!(Picks)
        </div>
        <div className="text-center text-white font-thin pt-6">
          당신에게 맞는 게임을 Pick!
        </div>
      </div>
      <div className="font-thin flex flex-col gap-6">
        <div className="w-[90%] m-auto px-6 py-10 bg-[#CCDFF5] text-center rounded-2xl cursor-pointer hover:opacity-80">
          👀 분석해주세요
        </div>

        <div
          className="w-[90%] m-auto px-6 py-10 bg-[#2D6DEF] text-center text-white rounded-2xl cursor-pointer hover:opacity-80"
          onClick={() => navigate("/select")}
        >
          🤨 내가 선택할래요
        </div>
      </div>
    </div>
  );
}
