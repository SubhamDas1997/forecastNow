type props = {
  params: {
    city: string,
    latitude: string,
    longitude: string
  }
}

function weatherReport({ params: {city, latitude, longitude }}: props) {
  return (
    <div>
      Welcome to the weather report of {city} {latitude} {longitude}
    </div>
  )
}

export default weatherReport