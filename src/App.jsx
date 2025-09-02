import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PortfolioFresh from './components/PortfolioFresh'
import AiStoriesProject from './components/projects/AiStoriesProject'
import EmailProject from './components/projects/EmailProject'
import ScalingProject from './components/projects/ScalingProject'
import PatentProject from './components/projects/PatentProject'
import ArchitectureProject from './components/projects/ArchitectureProject'
import ChartsProject from './components/projects/ChartsProject'
import ColorProject from './components/projects/ColorProject'
import LoadOrderProject from './components/projects/LoadOrderProject'
import PillarsProject from './components/projects/PillarsProject'
import AppsProject from './components/projects/AppsProject'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioFresh />} />
        <Route path="/projects/aistories" element={<AiStoriesProject />} />
        <Route path="/projects/email" element={<EmailProject />} />
        <Route path="/projects/scaling" element={<ScalingProject />} />
        <Route path="/projects/patent" element={<PatentProject />} />
        <Route path="/projects/architecture" element={<ArchitectureProject />} />
        <Route path="/projects/charts" element={<ChartsProject />} />
        <Route path="/projects/color" element={<ColorProject />} />
        <Route path="/projects/loadorder" element={<LoadOrderProject />} />
        <Route path="/projects/pillars" element={<PillarsProject />} />
        <Route path="/projects/apps" element={<AppsProject />} />
      </Routes>
    </Router>
  )
}

export default App