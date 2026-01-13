const HowIWork = () => {
  return (
    <section className="padding-x-lg mt-32">
      <div className="max-w-1xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl font-semibold text-white">
          How I Work
        </h2>

        <p className="mt-4 text-center text-gray-400 max-w-xl mx-auto">
          My approach to building clean, scalable, and production-ready web applications.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-zinc-900/80 border border-white/5 rounded-xl p-6">
            <div className="mb-4 text-emerald-400 text-xl">🧱</div>
            <h3 className="text-lg font-semibold text-white">
              Clean Architecture
            </h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              I build well-structured, maintainable components that scale easily
              as the project grows.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900/80 border border-white/5 rounded-xl p-6">
            <div className="mb-4 text-blue-400 text-xl">⚡</div>
            <h3 className="text-lg font-semibold text-white">
              Performance First
            </h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              Optimized rendering, efficient state management, and fast load
              times are always a priority.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-900/80 border border-white/5 rounded-xl p-6">
            <div className="mb-4 text-purple-400 text-xl">💬</div>
            <h3 className="text-lg font-semibold text-white">
              Communication & Feedback
            </h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              Clear communication and continuous feedback help deliver better
              products with fewer surprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowIWork
