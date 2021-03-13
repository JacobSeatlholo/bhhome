const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function HelloWorld(props) {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <h1>Company Overview</h1>
        <p>We help companies use agile+critical+adaptive futuristic thinking to build solid customer-centred profitable organisations. We offer brand consulting, outsourcing of technology services and solutions to organizations, individual brands, startups & SME's. Discover how we create meaningful impact</p>
    
    <iframe width="420" height="315"
src="https://youtu.be/embed/JWQzqT4UMRE">
</iframe>
      
      </Container>
    </div>
  );
}

module.exports = HelloWorld;
