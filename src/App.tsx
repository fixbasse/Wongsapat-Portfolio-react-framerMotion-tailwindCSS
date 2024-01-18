
import Hero from "./components/hero/Hero"
import Career from "./components/music/Career"
import Music from "./components/music/Music"
import Pursue from "./components/music/Pursue"
import Projects from "./components/projects/Projects"

import Skills from "./components/skill/Skills"
import StarCanvas from "./components/StarBackground"
import MusicProfile from "./components/profile/MusicProfile"

function App() {

  return (
    <>
      <div className="scrollSnapContainer">
        <Hero />
      </div>
      <div className="scrollSnapContainer">
        <Music />
      </div>
      <div className="scrollSnapContainer">
        <Pursue />
      </div>
      <div className="scrollSnapContainer">
        <Career />
      </div>
      <div className="scrollSnapContainer">
        <Skills />
      </div>
      <div className="scrollSnapContainer">
        <Projects />
      </div>
      <div className="scrollSnapContainer">
        <MusicProfile />
      </div>

      {/* BG */}
      <StarCanvas />
    </>
  )
}

export default App
