import { Post } from './Post'
import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'
function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Alan Wengrze"
            content="Fala galeraa 👋"
          />
          <Post 
            author="Alan Wengrze"
            content="Fala galeraa 👋"
          />
        </main>
      </div>
    </div>
  )
}

export default App
