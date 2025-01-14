import { Card, CardBody, Col } from 'reactstrap';
import CardHeaderCommon from '../../../../CommonElements/CardHeaderCommon/CardHeaderCommon';
import { CKEditorExample } from '../../../../utils/Constant';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const Editor = () => {
  const content = 'Hello!, This is content.';

  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={CKEditorExample} />
        <CardBody>
          <CKEditor editor={ClassicEditor} data={content} />
        </CardBody>
      </Card>
    </Col>
  );
}

export default Editor