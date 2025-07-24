import { SortBy } from '../constants'
import { useCountries } from '../hook/useCountries'
import { EditIcon, RemoveIcon } from './Icons'

export function CountriesTable({ countries, orderBy, isOpen }) {
  const { setSelectedCountry, removeCountries } = useCountries()

  const handleEdit = (country) => {
    setSelectedCountry(country)
    isOpen((prev) => !prev)
  }
  return (
    <table className="content-table">
      <thead>
        <tr>
          <th className="pointer_element" onClick={() => orderBy(SortBy.NAME)}>
            Common Name
          </th>
          <th className="pointer_element" onClick={() => orderBy(SortBy.REGION)}>
            Region
          </th>
          <th>Population</th>
          <th>Flag</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {countries?.map((country) => (
          <tr key={country.cca2}>
            <td>{country.name.common}</td>
            <td>{country.region}</td>
            <td>{country.population}</td>
            <td>
              <img src={country.flags.png} alt="" />
            </td>
            <td>
              <button className="button button--icon" onClick={() => handleEdit(country)}>
                <EditIcon />
              </button>
              <button className="button button--icon" onClick={() => removeCountries(country.cca2)}>
                <RemoveIcon />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
