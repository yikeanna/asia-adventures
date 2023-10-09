

function CityPage({ cityName }) {
  return (
    <div>
      <p>This is the {cityName}.</p>
    </div>
  );

}

  CityPage.defaultProps = {
    cityName: "Designer",
    tool: "Adobe XD",
  };

export default CityPage