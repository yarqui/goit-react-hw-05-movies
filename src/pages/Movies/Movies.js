const Movies = () => {
  return (
    <>
      <form>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies by name"
        ></input>
        <button type="submit">Search</button>
      </form>
      <p>Here will be movie-search</p>;
    </>
  );
};

export default Movies;
