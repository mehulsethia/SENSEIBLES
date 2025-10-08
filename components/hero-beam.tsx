"use client";

import Image from "next/image";

type Node = {
  id: string;
  logo: string;
  x: number;
  y: number;
  side: "left" | "right";
  track: number;
  targetOffset: number;
};

const VIEWBOX_WIDTH = 880;
const VIEWBOX_HEIGHT = 420;
const CENTER_X = VIEWBOX_WIDTH / 2;
const CENTER_Y = VIEWBOX_HEIGHT / 2;
const LEFT_ANCHOR = 190;
const CENTER_GUTTER = 90;

const leftLogos = [
  "/techstack-logos/bubble.png",
  "/techstack-logos/make.png",
  "/techstack-logos/n8n.png",
  "/techstack-logos/python.png",
  "/techstack-logos/chatgpt.png",
];

const rightLogos = [
  "/techstack-logos/figma.png",
  "/techstack-logos/flutterflow.png",
  "/techstack-logos/webflow.svg",
  "/techstack-logos/framer.svg",
  "/techstack-logos/supabase.png",
];

const ARM_LAYOUT = [
  { deltaX: -50, deltaY: -120, targetOffset: -90 },
  { deltaX: -70, deltaY: -70, targetOffset: -50 },
  { deltaX: -85, deltaY: -20, targetOffset: -10 },
  { deltaX: -70, deltaY: 40, targetOffset: 30 },
  { deltaX: -55, deltaY: 100, targetOffset: 80 },
];

const nodes: Node[] = ARM_LAYOUT.flatMap((layout, index) => {
  const leftNode: Node = {
    id: `left-${index}`,
    logo: leftLogos[index] ?? leftLogos[leftLogos.length - 1]!,
    x: LEFT_ANCHOR + layout.deltaX,
    y: CENTER_Y + layout.deltaY,
    side: "left",
    track: index,
    targetOffset: layout.targetOffset,
  };

  const rightNode: Node = {
    id: `right-${index}`,
    logo: rightLogos[index] ?? rightLogos[rightLogos.length - 1]!,
    x: VIEWBOX_WIDTH - (LEFT_ANCHOR + layout.deltaX),
    y: CENTER_Y + layout.deltaY,
    side: "right",
    track: index,
    targetOffset: layout.targetOffset,
  };

  return [leftNode, rightNode];
});

const toPercent = (value: number, total: number) => `${(value / total) * 100}%`;

const createConnectorPath = (node: Node) => {
  const isLeft = node.side === "left";
  const entryX = isLeft ? CENTER_X - CENTER_GUTTER : CENTER_X + CENTER_GUTTER;
  const entryY = CENTER_Y + node.targetOffset;
  const finalX = isLeft ? CENTER_X - 14 : CENTER_X + 14;
  const finalY = CENTER_Y + node.targetOffset * 0.3;
  const controlX1 = isLeft ? node.x + 120 : node.x - 120;
  const controlY1 = node.y - (node.y - entryY) * 0.5;
  const controlX2 = isLeft ? entryX - 86 : entryX + 86;
  const controlY2 = entryY - (entryY - finalY) * 0.6;
  const exitControlX = isLeft ? entryX + 32 : entryX - 32;
  const exitControlY = entryY - (entryY - finalY) * 0.35;

  return [
    `M ${node.x} ${node.y}`,
    `C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${entryX} ${entryY}`,
    `S ${exitControlX} ${exitControlY}, ${finalX} ${finalY}`,
    `L ${CENTER_X} ${CENTER_Y}`,
  ].join(" ");
};

function HeroBeam() {
  return (
    <div className="relative mt-0 sm:mt-2 w-full overflow-visible px-2 sm:px-4">
      <div className="relative mx-auto w-full max-w-[1320px] overflow-visible rounded-[32px] border border-white/15 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),rgba(247,245,243,0.02)_70%)] px-4 py-18 sm:px-6 sm:py-22"
        style={{ minHeight: "420px" }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[linear-gradient(90deg,rgba(55,50,47,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(55,50,47,0.05)_1px,transparent_1px)] bg-[size:36px_36px] opacity-40" />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
          preserveAspectRatio="none"
        >
          {nodes.map((node) => (
            <path
              key={`connector-${node.id}`}
              d={createConnectorPath(node)}
              className="beam-line"
              stroke="black"
              strokeOpacity={0.2}
              strokeWidth={2}
              strokeLinecap="round"
              fill="none"
              pathLength={1}
              style={{ animationDelay: `${node.track * 0.35 + (node.side === "right" ? 0.25 : 0)}s` }}
            />
          ))}
        </svg>

        <div
          className="pulse-core absolute z-30 flex h-[118px] w-[118px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28px] border border-black/5 bg-white shadow-[0_26px_60px_rgba(40,35,32,0.16)]"
          style={{
            left: toPercent(CENTER_X, VIEWBOX_WIDTH),
            top: toPercent(CENTER_Y, VIEWBOX_HEIGHT),
          }}
        >
          <Image src="/logo/ICON.png" alt="Senseibles icon" width={60} height={60} className="h-12 w-auto" priority />
        </div>

        {nodes.map((node) => (
          <div
            key={node.id}
            className="node-glow absolute z-20 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[24px] border border-white/65 bg-white shadow-[0_14px_32px_rgba(51,48,45,0.1)] backdrop-blur-sm"
            style={{ left: toPercent(node.x, VIEWBOX_WIDTH), top: toPercent(node.y, VIEWBOX_HEIGHT) }}
          >
            <div className="relative flex h-[42px] w-[42px] items-center justify-center overflow-hidden rounded-2xl bg-white">
              <Image
                src={node.logo}
                alt="Integration"
                width={36}
                height={36}
                className="h-8 w-8 object-contain"
                unoptimized={node.logo.endsWith(".svg")}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroBeam
