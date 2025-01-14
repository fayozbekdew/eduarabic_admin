import { Card, Col } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import UserBlogDetails from './UserBlogDetails'

const UserBlog = () => {
  return (
    <Col xl="6" className="set-col-12 box-col-6">
      <Card>
        <div className="blog-box blog-shadow">
          <Image className="img-fluid" src={`/src/assets/images/blog/blog.jpg`} alt="blog image" />
          <UserBlogDetails />
        </div>
      </Card>
    </Col>
  )
}

export default UserBlog