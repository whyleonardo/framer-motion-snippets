import { motion } from "framer-motion"
import { Handcraft } from "./handcraft"
// import { HeroPattern } from "./hero-pattern"

export const App = () => {
  return (
    <div className="bg-zinc-950 h-screen w-full flex items-center justify-center">
      <div className="w-full absolute bottom-0 opacity-30 border-neutral-600/30">
        <MySVG />
      </div>

      <h2 className="text-white text-6xl font-mono tracking-tighter max-w-[460px] text-balance text-center">
        A simple way to animate{" "}
        <span className="relative">
          SVG
          <div className="absolute w-28 -left-2">
            <Handcraft />
          </div>
        </span>{" "}
        code
      </h2>
    </div>
  )
}

export const MySVG = () => {
  return (
    <motion.svg
      id="hero"
      width="100%"
      height="100%"
      viewBox="0 0 1220 540"
      xmlns="http://www.w3.org/2000/svg"
      className=""
    >
      <path
        d="M0 540 C76.3662 431.739 193.056 290.568 292.4 290.568C391.743 290.568 539.193 155.125 623.5 112.369C718.122 82.9373 762 132.543 794 145.152C835.341 161.442 994.39 65.0268 1039.5 12.0028C1075.59 -30.4164 1199.73 75.8893 1240 75.5427 V540"
        className="stroke-neutral-600/50"
        stroke-width="1"
        fill="rgb(82 82 82 / 0.1)"
      />

      <path
        d="M0 540 C76.3662 431.739 193.056 290.568 292.4 290.568C391.743 290.568 539.193 155.125 623.5 112.369C718.122 82.9373 762 132.543 794 145.152C835.341 161.442 994.39 65.0268 1039.5 12.0028C1075.59 -30.4164 1199.73 75.8893 1240 75.5427 V540"
        stroke="url(#pulse)"
        stroke-width="1"
        fill="none"
      />
      <defs>
        <motion.linearGradient
          animate={{
            x1: [0, 1220 * 2],
            x2: [0, 1220],
            y1: [540, 540 / 2],
            y2: [540 * 2, 540]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
          id="pulse"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8257e6" stopOpacity="0" />
          <stop stopColor="#8257e6" />
          <stop offset="1" stopColor="#f142b6" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  )
}
