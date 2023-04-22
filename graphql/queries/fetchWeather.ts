import { gql } from "@apollo/client";

const fetchWeather = gql`
  query MyQuery(
    $current_weather: String
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $hourly: String = "temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      longitude: $longitude
      latitude: $latitude
      timezone: $timezone
    ) {
      elevation
      generationtime_ms
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      daily_units {
        apparent_temperature_min
        apparent_temperature_max
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        weathercode
        uv_index_max
      }
      hourly {
        apparent_temperature
        precipitation
        rain
        precipitation_probability
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        time
        temperature_2m
        uv_index_clear_sky
        uv_index
        windgusts_10m
      }
      latitude
      hourly_units {
        apparent_temperature
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        snow_depth
        showers
        snowfall
        temperature_2m
        uv_index
        time
        uv_index_clear_sky
        windgusts_10m
      }
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;

export default fetchWeather