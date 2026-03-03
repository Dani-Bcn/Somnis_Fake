import { useEffect, useState } from "react";

export function useDevice() {
  const getDeviceInfo = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const isMobile = width <= 768;
    const isTablet = width > 768 && width <= 1024;
    const isDesktop = width > 1024;

    const orientation =
      height >= width ? "portrait" : "landscape";

    return {
      width,
      height,
      isMobile,
      isTablet,
      isDesktop,
      orientation: isMobile ? orientation : null,
    };
  };

  const [device, setDevice] = useState(getDeviceInfo);

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDeviceInfo());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return device;
}