const SingleCard = ({ elem }) => {
  const { flag, name, capital } = elem;

  return (
    <div className="card">
      <div>
        <img src={flag} alt="" />
      </div>
      <div>
        <p>Name: {name}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
};

export default SingleCard;
