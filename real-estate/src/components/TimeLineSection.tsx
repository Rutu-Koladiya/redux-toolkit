"use client";

import { Timeline } from "./ui/timeline";

const data = [
  {
    title: "2024",
    content: (
      <div>
        <p className="mb-6 text-neutral-300">
          Launched our most ambitious luxury residential project yet, redefining
          modern architecture in India.
        </p>
        <ul className="list-disc pl-6 text-sm text-neutral-400">
          <li>Smart homes with AI-enabled security</li>
          <li>World-class wellness & lifestyle amenities</li>
        </ul>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="mb-6 text-neutral-300">
          Expanded presence in Mumbai & Delhi NCR with premium retail and office
          spaces.
        </p>
        <ul className="list-disc pl-6 text-sm text-neutral-400">
          <li>Flagship commercial tower</li>
          <li>First branded retail street</li>
        </ul>
      </div>
    ),
  },
  {
    title: "2018",
    content: (
      <div>
        <p className="mb-6 text-neutral-300">
          Awarded “Best Luxury Housing Project” by CREDAI. & Entered the luxury
          villa segment with a landmark gated community.
        </p>
        <ul className="list-disc pl-6 text-sm text-neutral-400">
          <li>Private pools & landscaped gardens</li>
          <li>Exclusive clubhouse & spa</li>
        </ul>
      </div>
    ),
  },
  {
    title: "2015",
    content: (
      <div>
        <p className="mb-6 text-neutral-300">
          Company founded with a vision to redefine India&apos;s luxury real estate
          landscape. & Completed first high-rise luxury apartment project in
          Bangalore.
        </p>
      </div>
    ),
  },
];

const TimeLineSection = () => {
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
};

export default TimeLineSection;
