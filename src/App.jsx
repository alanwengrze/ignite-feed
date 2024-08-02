import { Post } from './components/Post'
import { Header } from './components/Header'
function App() {

  return (
    <div>
      <Header />
      <Post 
        author="Alan Wengrze"
        content="Fala galeraa 👋"
      />
    </div>
  )
}

export default App
