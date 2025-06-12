import { Routes, Route } from 'react-router-dom'
import Header from '../../ui/header'
import Landing from '../../modules/landing'
import { LanguageProvider } from '../../shared/contexts/LanguageContext'

function App() {

  return (
    <LanguageProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<div>О нас</div>} />
          <Route path="/contact" element={<div>Контакты</div>} />
        </Routes>
      </main>
    </LanguageProvider>
  )
}

export default App
