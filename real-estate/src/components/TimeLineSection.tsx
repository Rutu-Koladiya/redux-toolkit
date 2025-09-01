"use client";

import { data } from "@/data/dummyData";
import { Timeline } from "./ui/timeline";

const TimeLineSection = () => {
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
};

export default TimeLineSection;
