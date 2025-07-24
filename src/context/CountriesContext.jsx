import { createContext, useEffect } from 'react'
import { useState } from 'react'
import { getCountries } from '../services/getCountries'

export const CountriesContext = createContext()

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    fetchCountries()
  }, [])

  const fetchCountries = () => {
    setLoading(true)
    setError(false)
    getCountries()
      .then((data) => {
        setCountries(data)
      })
      .catch(() => {
        setError(true)
        console.error('Error de red o del fetch')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <CountriesContext.Provider
      value={{
        countries,
        setCountries,
        loading,
        error,
        fetchCountries,
        selectedCountry,
        setSelectedCountry,
      }}
    >
      {children}
    </CountriesContext.Provider>
  )
}
