import './index.css'

const Review = ({userReview}) => {
  const {imgUrl, username, companyName, description} = userReview
  return (
    <li>
      <img alt={username} src={imgUrl} />
      <p className="username">{username}</p>
      <p>{companyName}</p>
      <p>{description}</p>
    </li>
  )
}

export default Review
