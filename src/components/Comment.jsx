import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
export function Comment({content, onDeleteComment}) {
  const publishedDateFormatted = format( new Date(), "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
  const publishedDateRelativeToNow = formatDistanceToNow(new Date(), { locale: ptBR, addSuffix: true })
  function handleDeleteComment() {
    onDeleteComment(content)
  }
  return(
    <div className={styles.comment}>
      <Avatar 
        src="https://github.com/alanwengrze.png"
        hasBorder={false}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alan Wengrze</strong>
              <time title={publishedDateFormatted} dateTime={new Date().toISOString()}>{publishedDateRelativeToNow}</time>
            </div>
            <button 
              title='Deletar comentário'
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}