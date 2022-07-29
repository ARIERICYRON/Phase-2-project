import React from 'react';
import './content.css';

function Content({ types }) {
  return (
    <div className="content">

      <Contentsection type={types} />
      <Contentcard />

    </div>
  );
}

const Contentsection = ({ type }) => (
  <div className="content-section">
  </div>

);

const Contentcard = () => (
  <div className="card-container">
    <Cardsection image="http://placeimg.com/280/400/spiderman" />
    <Cardsection image="http://placeimg.com/280/400/avergas" />
    <Cardsection image="http://placeimg.com/280/400/animals" />
    <Cardsection image="http://placeimg.com/280/400/dogs" />
    <Cardsection image="http://placeimg.com/280/400/moon" />

  </div>

);

const Cardsection = ({ image }) => (
  <div className="card" style={{ backgroundImage: `url(${image})` }} />
);
export default Content;
