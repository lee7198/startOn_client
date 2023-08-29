import { useEffect } from "react";
import Spinner from "../../components/Spinner";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function Loading() {
  // const navigate = useNavigate();

  const getRecomend = async () => {
    const data = await axios
      .get("/mbti/10,20,70,15,15,70,20,20,60/", {
        headers: {
          Accept: "json",
          responseType: "stream",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log("error", error);
      });
    // JSON.parse(data);
    return data;
  };

  useEffect(() => {
    getRecomend().then((res) => console.log(res));
  }, []);

  return (
    <div className="h-[100svh] flex flex-col items-center justify-center ">
      <Spinner className="py-6 w-12" />
      <div className="text-white font-thin">분석중...</div>
    </div>
  );
}
