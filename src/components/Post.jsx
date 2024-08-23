import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'


export function Post({author, content, publishedAt}) {

  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

  function handleCreateNewComment(e){
    e.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  return(
    <article className={styles.post}>
      <header>

        <div className={styles.author}>
          <Avatar 
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
        </header>

        <div className={styles.content}>
          {
            content.map((line, index) => {
              if (line.type === 'paragraph') {
                return <p key={index}>{line.content}</p>
              } else if (line.type === 'link') {
                return <p key={index}><a href="#">{line.content}</a></p>
              }
            })
          }
        </div>
        <form 
          className={styles.commentForm}
          onSubmit={handleCreateNewComment}
        >
          <strong>Deixe seu feedback</strong>
          <textarea 
            placeholder="Deixe um comentário"
            onChange={e => setNewCommentText(e.target.value)}
            value={newCommentText}
          />
          <footer>
            <button type='submit'>Publicar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          {
            comments.map((comment, index) => {
              return <Comment 
                key={index}
                content={comment}
                onDeleteComment={deleteComment}
              />
            })
          }
        </div>
    </article>
  )
}