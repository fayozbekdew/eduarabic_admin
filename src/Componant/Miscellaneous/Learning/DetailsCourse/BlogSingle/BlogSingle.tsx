import { Card, CardBody } from 'reactstrap';
import { H4, Image, UL } from '../../../../../AbstractElements';
import { CommentTitleLearning } from '../../../../../utils/Constant';
import BlogDetails from './BlogDetails';
import UserComment from './UserComment';

const BlogSingle = () => {
  return (
    <Card>
      <CardBody>
        <div className="blog-single">
          <div className="blog-box blog-details">
            <Image className="img-fluid w-100" src={`/src/assets/images/faq/learning-1.png`} alt="blog-main" />
            <BlogDetails />
          </div>
          <section className="comment-box">
            <H4>{CommentTitleLearning}</H4>
            <hr />
            <UL className='simple-list'>
                <UserComment  />
            </UL>
          </section>
        </div>
      </CardBody>
    </Card>
  )
}

export default BlogSingle