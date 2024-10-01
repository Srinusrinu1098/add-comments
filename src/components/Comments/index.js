import {Component} from 'react'
import './index.css'
import CommentItem from '../CommentItem'

const commentColors = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const commentList = [
  {
    id: 1,
    name: 'Srinu',
    comment: 'i will definitely become a full stack developer',
  },
  {
    id: 2,
    name: 'Friends',
    comment: "you will do it buddy just don't give up",
  },
]

class Comments extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="card-container">
          <form>
            <h1>Comments</h1>
            <label htmlFor="name">say something about 4.0 technology</label>
            <br />

            <input
              type="text"
              id="name"
              className="input"
              placeholder="Your Name"
            />
            <br />
            <textarea rows="8" cols="24" placeholder="Your Comment" />
            <br />
            <button type="submit" className="button">
              add comment
            </button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr className="hr" />
        <div className="comment-count">
          <p className="count">0</p>
          <p className="comment">comments</p>
        </div>
        <ul className="ul">
          {commentList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentList={eachComment}
              colors={commentColors}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
