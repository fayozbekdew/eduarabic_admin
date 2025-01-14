import { H4, Image, P } from '../../../../AbstractElements'

const HeaderProfile = () => {
  return (
    <div className="d-flex">
      <div className="media-size-email">
        <Image
          className="me-3 rounded-circle"
          src={"/src/assets/images/user/user.png"}
          alt="user"
        />
      </div>
      <div className="flex-grow-1">
        <H4>{'MARK JENCO'}</H4>
        <P>{'Markjecno@gmail.com'}</P>
      </div>
    </div>
  )
}

export default HeaderProfile