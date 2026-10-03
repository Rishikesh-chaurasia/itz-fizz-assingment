import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {
  return (
    <main
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#050505] text-white"
    >
      {/* Navigation */}
      <Navbar />

      {/* Main Hero */}
      <Hero />
    </main>
  )
}

export default App

