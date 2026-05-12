import React, { useRef, useEffect } from "react";

const serverData = [
  8,18,5,60,12,4,70,9,22,6,45,8,15,5,80,12,30,7,55,10,
  20,6,40,9,18,5,65,11,28,7,50,10,35,8,75,14,25,6,42,9,
  16,5,58,12,22,7,48,11,20,6,38,9,14,5,62,10,28,7,52,13,
  18,5,45,9,22,6,55,11,32,8,48,10,25,7,60,12,20,6,42,9,
];

const ServerStatusCard = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.innerHTML = "";

    const W = svg.clientWidth || 248;
    const H = 80;
    const maxV = Math.max(...serverData);
    const count = serverData.length;
    const gap = W / count;

    serverData.forEach((v, i) => {
      const x = i * gap + gap / 2;
      const lineH = (v / maxV) * (H - 4);
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", x);
      line.setAttribute("y1", H);
      line.setAttribute("x2", x);
      line.setAttribute("y2", H - lineH);
      line.setAttribute("stroke", i >= count - 20 ? "#4F45B6" : "#C7C4EC");
      line.setAttribute("stroke-width", "1.2");
      line.setAttribute("stroke-linecap", "round");
      svg.appendChild(line);
    });
  }, []);

  return (
    <div className="bg-[#F4F2FF] rounded-2xl p-4">
      <h3 className="text-sm font-bold text-gray-800 font-['Cairo'] mb-3">
        Server Status
      </h3>

      {/* Spike Chart */}
      <svg
        ref={svgRef}
        className="w-full mb-3"
        style={{ height: 80, display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
      />

      {/* Info Row */}
      <div className="flex items-end justify-between text-xs font-['Cairo']">
        <div>
          <p className="text-gray-400">Country</p>
          <p className="font-semibold text-gray-700">Indonesia</p>
        </div>
        <div>
          <p className="text-gray-400">Domain</p>
          <p className="font-semibold text-gray-700">website.com</p>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-500 mt-3" />
          <div>
            <p className="text-gray-400">Up</p>
            <p className="font-semibold text-gray-700">3.0 mbps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerStatusCard;