import { forwardRef } from "react"

const stats = [
  {
    value: "99%",
    label: "Delivery Rate",
  },
  {
    value: "10M+",
    label: "Global Reach",
  },
  {
    value: "24/7",
    label: "Creative Support",
  },
]

const Stats = forwardRef(function Stats(_, ref) {
  return (
    <div
      ref={ref}
      className="grid w-full grid-cols-1 border-y border-white/10 sm:grid-cols-3"
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`group relative overflow-hidden px-6 py-7 transition-colors duration-300 hover:bg-white/[0.025] sm:px-8 ${
            index !== stats.length - 1
              ? "border-b border-white/10 sm:border-b-0 sm:border-r"
              : ""
          }`}
        >
          {/* Hover Accent */}
          <div className="absolute left-0 top-0 h-px w-0 bg-lime-400 transition-all duration-500 group-hover:w-full" />

          {/* Number */}
          <div className="mb-2 text-4xl font-semibold tracking-[-0.04em] text-white transition-transform duration-300 group-hover:-translate-y-1 sm:text-5xl">
            {stat.value}
          </div>

          {/* Label */}
          <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 sm:text-xs">
            {stat.label}
          </div>

          {/* Indicator */}
          <div className="absolute bottom-5 right-6 h-1.5 w-1.5 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-lime-400 group-hover:shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
        </div>
      ))}
    </div>
  )
})

Stats.displayName = "Stats"

export default Stats


