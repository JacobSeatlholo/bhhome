const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function HelloWorld(props) {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <h1>Hello World!</h1>
        <p>This is my first page!</p>
    
    <iframe width="420" height="315"
src="https://www.youtube.com/embed/watch?v=PuMDCqvMs0E">
</iframe>
    
      </Container>
    </div>
  );
}

module.exports = HelloWorld;
