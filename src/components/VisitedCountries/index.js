import './index.css'

const VisitedCountries = props => {
  const {visitedCountry, deleteVisitCountry} = props
  const {id, imageUrl, name} = visitedCountry
  return (
    <li className="visit-country-item">
      <img src={imageUrl} alt="thumbnail" />
      <div>
        <p>{name}</p>
        <button type="button" onClick={() => deleteVisitCountry(id)}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
