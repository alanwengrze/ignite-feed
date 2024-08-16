import { Comment } from './Comment'
import styles from './Post.module.css'
export function Post({author, work}) {
  return(
    <article className={styles.post}>
      <header>

        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/alanwengrze.png" />
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>{work}</span>
          </div>
        </div>

        <time dateTime="2023-12-08 20:27:00">publicado há 1h</time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p> <a href="#">👉 jane.design/doctorcare</a></p>
          <p className={styles.hashtags}>
            <a href="#">#novoprojeto</a>
            <a href="#">#nlw</a>
            <a href="#">#rocketseat</a>
          </p>
        </div>
        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea 
            placeholder="Deixe um comentário"
          />
          <footer>
            <button type='submit'>Publicar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
    </article>
  )
}