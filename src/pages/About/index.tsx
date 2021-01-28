import React from "react";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import Container from "../../components/Container";

const About: React.FC = () => {
  return (
    <Container>
      <section className="mb-4">
        <a href="https://www.volcanic.com/">
          <Logo width={200} className="mb-6" />
        </a>
        <p className="text-2xl">
          This is an assessment for Volcanic which is done by Alireza Safian. It
          is React application and includes a modal component which displays
          list of conditions.
        </p>
      </section>
    </Container>
  );
};

export default About;
