const SingleCard = ({ elem }) => {
  const { flag, name, capital } = elem;

  return (
    <div className="card">
      <div>
        <img src={flag} alt="" />
      </div>
      <div>
        <p>
          <strong>Name : </strong> {name}
        </p>
        <p>
          <strong>Capital : </strong> {capital}
        </p>
      </div>
    </div>
  );
};

export default SingleCard;
