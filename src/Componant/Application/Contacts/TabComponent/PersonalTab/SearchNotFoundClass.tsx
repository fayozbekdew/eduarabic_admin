import { Col } from 'reactstrap'
import { P } from '../../../../../AbstractElements'

const SearchNotFoundClass = () => {
  return (
    <Col sm="12">
      <div>
        <div className="search-not-found text-center p-5">
          <P className="mb-0">{'Sorry, Not Found Any Contact'}</P>
        </div>
      </div>
    </Col>
  )
}

export default SearchNotFoundClass