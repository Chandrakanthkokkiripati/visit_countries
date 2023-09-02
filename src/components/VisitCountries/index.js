import './index.css'

const VisitCountries = props => {
  const {country, addCountriesList} = props
  const {name, isVisited, id} = country
  const buttonText = isVisited ? (
    <p>Visited</p>
  ) : (
    <button onClick={() => addCountriesList(id)} type="button">
      Visit
    </button>
  )

  return (
    <li>
      <p className="country-name">{name}</p>
      {buttonText}
    </li>
  )
}

export default VisitCountries
