import { useCountries } from '../hook/useCountries'

export function Header({ setFilterName, isOpen }) {
  const { resetCountries } = useCountries()
  return (
    <header className="header-table">
      <div className="label-input">
        <label htmlFor="name">Country Common Name</label>
        <input type="text" id="name" onChange={(e) => setFilterName(e.target.value)} />
      </div>
      <button className="button" onClick={resetCountries}>
        Reset Countries
      </button>
      <button className="button" onClick={() => isOpen((prev) => !prev)}>
        Create Country
      </button>
    </header>
  )
}
