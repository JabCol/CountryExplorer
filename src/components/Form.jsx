import { useEffect, useRef } from 'react'
import { useCountries } from '../hook/useCountries'
import '../css/form.css'

export function Form() {
  const { createCountry, updateCountry, selectedCountry, setSelectedCountry } = useCountries()
  const nameRef = useRef()
  const regionRef = useRef()
  const populationRef = useRef()
  const flagRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const name = formData.get('name')
    const region = formData.get('region')
    const population = formData.get('population')
    const flag_url = formData.get('flag_url')

    if (name == '' || region == '' || population == '') return

    if (selectedCountry) {
      updateCountry({
        ...selectedCountry,
        name: { ...selectedCountry.name, common: name },
        region,
        population,
        flags: {
          ...selectedCountry.flags,
          png: flag_url ? flag_url : 'https://unavatar.io/github/unknowncountry',
        },
      })
      setSelectedCountry(null)
      form.reset()
      return
    }

    const newCountry = {
      cca2: +new Date(),
      name: { common: name },
      region,
      population,
      flags: {
        png: flag_url ? flag_url : 'https://unavatar.io/github/unknowncountry',
      },
    }
    createCountry(newCountry)

    form.reset()
  }

  useEffect(() => {
    if (selectedCountry) {
      nameRef.current.value = selectedCountry.name.common
      regionRef.current.value = selectedCountry.region
      populationRef.current.value = selectedCountry.population
      flagRef.current.value = selectedCountry.flags.png
    }
  }, [selectedCountry])

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="name">Common Name</label>
        <input ref={nameRef} type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="region">Region</label>
        <input ref={regionRef} type="text" id="region" name="region" />
      </div>
      <div>
        <label htmlFor="population">Population</label>
        <input ref={populationRef} type="number" id="population" name="population" />
      </div>
      <div>
        <label htmlFor="flag_url">url http of the image of the flag</label>
        <input ref={flagRef} type="text" id="flag_url" name="flag_url" />
      </div>
      <button className="button">Send</button>
    </form>
  )
}
