import { useState } from 'react';
import { Btn, H1, P } from '../../../../AbstractElements';
import { Card, CardBody, Col } from 'reactstrap';
import CardHeaderCommon from '../../../../CommonElements/CardHeaderCommon/CardHeaderCommon';
import { InlineEditors } from '../../../../utils/Constant';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const InlineEditor = () => {
  const YourTitle: string = "Your title";
  const [editing, setEditing] = useState(false);
  const showEditor = () => {
    setEditing(!editing)
  }

  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={InlineEditors} />
        <CardBody>
          {editing ? (
            <>
              <CKEditor editor={ClassicEditor} data={YourTitle} />
              <Btn color='tranparent' className='mt-2' onClick={() => setEditing(false)}>{'Show'}</Btn>
            </>
          ) : (
            <div onClick={showEditor}>
              <H1>{YourTitle}</H1>
              <P>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate urna, sed dignissim arcu. Aliquam at ligula imperdiet, faucibus ante a, interdum enim. Sed in mauris a lectus lobortis condimentum. Sed in nunc magna. Quisque massa urna, cursus vitae commodo eget, rhoncus nec erat. Sed sapien turpis, elementum sit amet elit vitae, elementum gravida eros. In ornare tempus nibh ut lobortis. Nam venenatis justo ex, vitae vulputate neque laoreet a.'}</P>
            </div>
          )}
        </CardBody>
      </Card>
    </Col>
  );
}

export default InlineEditor