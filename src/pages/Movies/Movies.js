const Movies = () => {
  return (
    <>
      <p>Here will be movies</p>;
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
    </>
  );
};

export default Movies;
