import React from "react";
import Modal from "../../components/Modal";

import "rsuite/lib/Modal/styles/index.less";

import Container from "../../components/Container";

const Home: React.FC = () => {
  const [show, setShow] = React.useState(false);

  const handleModal = () => {
    setShow( !show);
  }

  return (
    <Container>
      <section className="text-gray-600 body-font flex items-center justify-center h-52">
        <button className="btn btn-primary" onClick={handleModal}>Modal</button>
        <Modal show={show} onClose={handleModal}/>
      </section>
    </Container>
  );
};

export default Home;
