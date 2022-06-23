import { useSelector } from 'react-redux';

const Details = () => {
  const country = useSelector((state) => state.selectedCountry);
  console.log(country);
  return (
    <section>
      <DetailsHeader country={country.name} flag={country.flag} />
      <h1>Details</h1>
    </section>
  );
};

export default Details;
