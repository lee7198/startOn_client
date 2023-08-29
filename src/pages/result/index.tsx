export default function Result() {
  return (
    <div className="h-[100svh] flex flex-col justify-around items-center container mx-auto max-w-screen-sm py-10">
      <div className="text-white text-center w-[80%] rounded-2xl bg-white/20 py-6 px-12">
        <div className="py-3 text-xl font-thin">🤔 당신을 위한 추천!</div>
        <div className="pb-6 text-3xl font-bold">메이플스토리</div>
        <div className="bg-white aspect-[4/3] rounded-2xl" />
        <div className="w-full text-start pt-6">
          <span className="mr-3">#RPG</span>
          <span className="mr-3">#RPG</span>
        </div>
        <div className="flex justify-end">
          <div className="bg-white py-3 pl-6 pr-4 text-black rounded-full flex gap-3 cursor-pointer hover:bg-white/80">
            <span>다시하기</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000"
              viewBox="0 0 256 256"
              className="ml-auto"
            >
              <path d="M220,128a92,92,0,0,1-90.77,92H128a91.47,91.47,0,0,1-63.13-25.1,4,4,0,1,1,5.5-5.82A84,84,0,1,0,68.6,68.57l-.13.12L34.3,100H72a4,4,0,0,1,0,8H24a4,4,0,0,1-4-4V56a4,4,0,0,1,8,0V94.89l35-32A92,92,0,0,1,220,128Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
