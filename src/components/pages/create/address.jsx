import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import scriptLoader from 'react-async-script-loader'
import { useState } from 'react'
// const google = window.google

const Address = ({ isScriptLoaded, isScriptLoadSucceed }) => {
  const [address, setAddress] = useState('')
  // const searchOptions = {
  //   location: new window.google.maps.LatLng(-28.47926, 24.67271),
  //   radius: 2000,
  //   ypes: ['address']
  // }

  const handleChange = (value) => {
    setAddress(value)
  }

  const handleSelect = (value) => {
    setAddress(value)
    console.log({value})
  }

  if (isScriptLoaded && isScriptLoadSucceed) {
    return (
      <div>
        <p>Full Address</p>
        <PlacesAutocomplete value={address} onChange={handleChange}
          onSelect={handleSelect}
          highlightFirstSuggestion={true}>
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input {...getInputProps({
                placeholder: 'Enter address ...'
              })} />
              <div>
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const style = suggestion.active ?
                    { backgroundColor: '#a83232', cursor: 'pointer' } :
                    { backgroundColor: '#ffffff', cursor: 'pointer' }

                  return (
                    <div key={suggestion.id} {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>)
  } else {
    return <div></div>
  }
}

export default scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${
  import.meta.env.VITE_APP_GOOGLE_MAP_API}&libraries=places`
])(Address)