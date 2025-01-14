import { Image, LI, P, UL } from "../../../../AbstractElements";

const CustomersSocial = () => {
  const imgData = [1, 2, 3];
  return (
    <div className="flex-shrink-0">
      <div className="customers social-group">
        <UL className="simple-list">
          {imgData.map((data, i) => (
            <LI className="d-inline-block" key={i}>
              <Image
                className="rounded-circle img-30"
                src={`/src/assets/images/dashboard-2/user/${data}.png`}
                alt="user"
              />
            </LI>
          ))}
          <LI className="d-inline-block">
            <P className="bg-light rounded-circle">5+</P>
          </LI>
        </UL>
      </div>
    </div>
  );
};

export default CustomersSocial;
