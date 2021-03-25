import "./MovieTile.scss";

const MovieTile = ({ Poster, Title, Year }) => {
  return (
    <div className="MovieTile">
      <img src={Poster} alt={Title} />
      <div className="MovieTile-title">{Title}</div>
      <div className="MovieTile-year">{Year}</div>
    </div>
  );
};

export default MovieTile;
