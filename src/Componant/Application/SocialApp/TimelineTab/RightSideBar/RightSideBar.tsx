import { Card, Col } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import ProfileIntroCard from './ProfileIntroCard'
import FollowerCard from './FollowerCard'
import FollowingsCard from './FollowingsCard'
import LatestPhotos from './LatestPhotos'
import FriendsCard from './FriendsCard'

const RightSideBar = () => {
  return (
    <>
      <ProfileIntroCard />
      <FollowerCard />
      <FollowingsCard />
      <LatestPhotos />
      <FriendsCard />
      <Col xl="12" className="xl-50 box-col-12">
        <Card>
          <Image className="img-fluid" src={'/src/assets/images/social-app/timeline-4.png'} alt="timeline"/>
        </Card>
      </Col>
    </>
  )
}

export default RightSideBar