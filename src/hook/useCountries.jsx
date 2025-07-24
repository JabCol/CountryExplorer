import { useContext } from 'react'
import { CountriesContext } from '../context/CountriesContext'

export function useCountries() {
  const {
    countries,
    setCountries,
    loading,
    error,
    selectedCountry,
    setSelectedCountry,
    fetchCountries,
  } = useContext(CountriesContext)

  const updateCountry = (country) => {
    setCountries((prevCountries) =>
      prevCountries.map((c) => (c.cca2 === country.cca2 ? { ...c, ...country } : c)),
    )
  }

  const createCountry = (country) => {
    setCountries((prevCountries) => [...prevCountries, country])
  }

  const removeCountries = (cca2) => {
    setCountries((prevCountries) => prevCountries.filter((country) => country.cca2 !== cca2))
  }

  const resetCountries = () => {
    fetchCountries()
  }

  return {
    countries,
    loading,
    error,
    createCountry,
    updateCountry,
    removeCountries,
    resetCountries,
    selectedCountry,
    setSelectedCountry,
  }
}
