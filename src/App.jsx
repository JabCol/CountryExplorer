import { useCountries } from './hook/useCountries'
import { CountriesTable } from './components/CountriesTable'
import { usePagination } from './hook/usePagination'
import { useFilteredSorted } from './hook/useFilteredSorted'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { useState } from 'react'

export function App() {
  const { countries, loading, error } = useCountries()
  const { filterName, setFilterName, setSorting, sortedCountries } = useFilteredSorted(countries)
  const { currentPage, totalPages, handleNext, handlePrev, dataToShow } = usePagination(
    sortedCountries,
    filterName,
  )
  const [open, setOpen] = useState(false)

  return (
    <>
      <h1>Table of Countries</h1>

      <Header setFilterName={setFilterName} isOpen={setOpen} />

      <main className="main-container">
        {loading && <p>Loading...</p>}
        {!loading && error && <p>There is an error</p>}
        {!loading && !error && countries?.length === 0 && <p>There is not available countries</p>}
        {!loading && !error && countries && countries?.length > 0 && (
          <CountriesTable countries={dataToShow} orderBy={setSorting} isOpen={setOpen} />
        )}

        <div className="buttons">
          <button className="button" onClick={handlePrev} disabled={currentPage === 1}>
            Before
          </button>
          <div>Page {currentPage} </div>
          <button className="button" onClick={handleNext} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>

        <Modal isOpen={open} status={setOpen}>
          <Form />
        </Modal>
      </main>
    </>
  )
}
