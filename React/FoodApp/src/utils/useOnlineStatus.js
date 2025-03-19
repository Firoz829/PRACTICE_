import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlinest, setOnlineSt] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineSt(false);
    });

    window.addEventListener("online", () => {
      setOnlineSt(true);
    });
  }, []);
  return onlinest;
};

export default useOnlineStatus;
