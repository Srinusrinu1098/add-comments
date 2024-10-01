import './index.css'

const CommentItem = props => {
  const {commentList, colors} = props
  const {name, comment} = commentList
  const random = colors[Math.ceil(Math.random() * colors.length - 1)]

  return (
    <li>
      <div className="li">
        <p className={`profile-name ${random}`}>{name[0]}</p>
        <div className="comment-flex">
          <div className="flexing">
            <h1 className="heading">{name}</h1>
            <p className="para">less than 1min ago</p>
          </div>

          <p className="description">{comment}</p>
        </div>
      </div>
      <div className="like-delete">
        <div className="like-flex">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt="like"
            className="like"
          />
          <p className="para1">like</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
          className="delete"
        />
      </div>
      <hr className="hr1" />
    </li>
  )
}
export default CommentItem
