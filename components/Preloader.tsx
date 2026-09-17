"use client";

import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = "hidden";

    // Trigger zoom-out and fade after 1.3 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1350);

    // Completely unmount after exit animation finishes (total ~1.95s)
    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 1950);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black transition-opacity duration-600 ease-out select-none ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={isExiting}
    >
      <div className="relative flex items-center justify-center">
        
        {/* Deep Radiant Glow as in Hero - contracts and dissolves on exit */}
        <div
          className={`absolute w-72 sm:w-96 h-72 sm:h-96 bg-gradient-radial from-[#49a078]/40 via-[#216869]/35 to-transparent blur-3xl rounded-full pointer-events-none transition-all duration-600 ease-out ${
            isExiting ? "scale-50 opacity-0" : "scale-100 opacity-100 animate-pulse"
          }`}
        />

        {/* Ambient Secondary Aura */}
        <div
          className={`absolute w-56 h-56 bg-[#216869]/40 blur-2xl rounded-full pointer-events-none transition-all duration-600 ease-out ${
            isExiting ? "scale-50 opacity-0" : "scale-100 opacity-100"
          }`}
        />

        {/* Centerpiece Spinning Kairos Favicon Sigla with Zoom-Out on Exit */}
        <div
          className={`relative z-10 w-24 sm:w-28 h-24 sm:h-28 flex items-center justify-center transition-all duration-600 cubic-bezier(0.16, 1, 0.3, 1) ${
            isExiting ? "scale-0 opacity-0 rotate-180" : "scale-100 opacity-100"
          }`}
        >
          <svg
            viewBox="0 0 64 64"
            className="w-full h-full animate-[spin_2.2s_linear_infinite] drop-shadow-[0_0_35px_rgba(73,160,120,0.9)] origin-center"
          >
            <g transform="matrix(0.140125,0,0,0.140125,-56.146273,-137.463049)">
              <g transform="matrix(1,0,0,1,-33.575588,54)">
                <g transform="matrix(0.676678,-0.603313,0.603313,0.676678,-584.212429,1972.138298)">
                  {/* Outer Ring #49a078 */}
                  <path
                    d="M1614.262,418.378C1567.517,418.378 1523.571,400.174 1490.518,367.122C1457.465,334.068 1439.262,290.122 1439.262,243.378C1439.262,196.633 1457.465,152.687 1490.518,119.634C1523.571,86.58 1567.517,68.378 1614.262,68.378C1661.006,68.378 1704.952,86.581 1738.005,119.634C1771.058,152.687 1789.261,196.633 1789.261,243.378C1789.261,290.122 1771.058,334.068 1738.005,367.122C1704.952,400.174 1661.006,418.378 1614.262,418.378ZM1614.262,91.03C1575.231,91.03 1536.199,105.887 1506.486,135.601C1447.057,195.029 1447.057,291.726 1506.486,351.154C1565.914,410.582 1662.61,410.582 1722.038,351.154C1781.467,291.726 1781.467,195.028 1722.038,135.601C1692.323,105.887 1653.292,91.03 1614.262,91.03Z"
                    fill="#49a078"
                    stroke="#49a078"
                    strokeWidth="41.98"
                  />
                  {/* Inner Crescent #216869 */}
                  <path
                    d="M1730.021,387.364C1722.796,387.364 1715.574,384.608 1710.062,379.097C1699.04,368.074 1699.04,350.202 1710.062,339.179C1735.652,313.589 1749.745,279.566 1749.745,243.378C1749.745,207.188 1735.652,173.166 1710.062,147.576C1699.04,136.553 1699.04,118.681 1710.062,107.658C1721.085,96.636 1738.956,96.636 1749.98,107.658C1824.815,182.494 1824.815,304.26 1749.98,379.096C1744.468,384.608 1737.245,387.364 1730.021,387.364Z"
                    fill="#216869"
                    stroke="#216869"
                    strokeWidth="41.98"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>

      </div>
    </div>
  );
}
