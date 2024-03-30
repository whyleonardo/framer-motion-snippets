import { motion } from "framer-motion"

export const Handcraft = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 197 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M2 2C5.73928 2.2463 9.51716 2.84216 13.2522 3.18349C24.1005 4.17487 35.0911 4.58848 46.0105 4.9368C75.2835 5.87058 104.794 5.15596 134.092 5.15596C153.743 5.15596 212.696 5.15596 193.045 5.15596C188.244 5.15596 182.903 6.3737 178.133 6.93119C164.736 8.49686 151.197 8.95041 137.813 10.4817C124.822 11.9678 111.953 12.8704 98.9441 13.8129C95.2633 14.0796 91.7065 14.2585 88.0247 14.7115C85.8267 14.982 81.1097 15.1969 79.4343 16.2895C78.4753 16.9149 90.4376 18.7727 92.0779 18.9633C95.2259 19.3291 98.4852 19.2751 101.515 20.0591C103.029 20.4508 97.5262 21.7369 97.1595 21.8124C92.077 22.8591 86.9219 24.1903 81.6121 24.4862C80.6684 24.5388 87.2441 26.7706 88.5691 27.3354C90.7608 28.2695 84.2065 29.9905 83.8505 30.0968C76.5549 32.2756 68.6189 33.1274 61.4671 35.5321C59.7978 36.0934 53.7699 37.8473 54.6311 39.9592C55.9603 43.2189 66.4727 44.2129 70.0575 45"
        className="stroke-neutral-400/70"
        strokeWidth="2"
        strokeLinecap="round"
        transition={{
          duration: 0.7,
          ease: "easeInOut"
        }}
        initial={{
          pathLength: 0
        }}
        animate={{
          pathLength: 1
        }}
      />
    </svg>
  )
}
