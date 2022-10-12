import React from 'react';
import {Modal, ModalVariant, Button, Title, TitleSizes} from '@patternfly/react-core';

const OverviewModal = ({showModal, setShowModal, overview}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(showModal);

  const handleModalToggle = () => {
    setShowModal(false);
    setIsModalOpen(false);
  };

  const header = <React.Fragment>
    <Title id="modal-header-label" headingLevel="h1" size={TitleSizes['2xl']}>
      {overview.title}
    </Title>
  </React.Fragment>;

  const footer = (
    <Title headingLevel="h4" size={TitleSizes.md}>
      <Button key="close" variant="primary" onClick={handleModalToggle}>Close</Button>,
      <Button key="launch" variant="link" onClick={handleModalToggle}>
        <a href={overview.applink} className="pf-c-button pf-m-link">Launch Application</a>
      </Button>
      <Button key="code" variant="link" onClick={handleModalToggle}>
        <a href={overview.githublink} className="pf-c-button pf-m-link">Explore Code</a>
      </Button>
    </Title>);
  
  return <React.Fragment>
      <Modal variant={ModalVariant.large} isOpen={isModalOpen} onClose={handleModalToggle} header={header} aria-labelledby="modal-header-label" aria-describedby="modal-header-description" footer={footer}>
        <span id="modal-header-description">
          Tech Used: {overview.technologies}
        </span>
        <br />
        <br />
        {overview.overview}
      </Modal>
    </React.Fragment>;
};

export default OverviewModal;