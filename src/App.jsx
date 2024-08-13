import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Alan Wengrze"
            work="Web Developer"
          />
          <Post 
            author="Lucas Santos"
            work="Técnico em informática"
          />
        </main>
      </div>
    </div>
  )
}

export default App
