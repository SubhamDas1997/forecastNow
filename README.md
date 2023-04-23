<h1 align="center">ForecastNow 🔆</h1>

### 🌐 [Site](https://forecast-now-silk.vercel.app)

# Features
A full stack weather app summarising a weather report of any city of the world:
  - Using 'country-state-city' library, select any city of the world to check weather for
  
  - Fetch current weather conditions of any city which includes current temperature, cloud cover, sunrise and sunset times and so on with the help of 'Open-Meteo' free weather API
  
  - Pictorially display the hourly change in temperature, uv index, rain probability and more with the help of area graphs
  
  - Generate concise summary with suggestions about tackling the weather conditions using GPT-3.5-turbo taking in all the weather data from the API response

# Screenshots

# Modules
1. Homepage
    - City Picker Select
<br><br>
1. Weather Report
    - Information Panel
    - Callout Cards
    - Stat Cards
    - Charts
<br><br>
1. Loading

### Homepage
Contains the landing page of the application for user to select the country and city to check the weather for.

### Weather Report
Made up of an info panel and reusable callout, stat and chart components customised using tremor 2.0 library assets.<br>
Info panel consists of details of city and current weather along with an option to change city.<br>
Response from GPT-3.5-turbo and excess uv index are shown as a callouts.<br>
Stat cards are used to show rest of the weather details.<br>
Hourly changing data such as temperature, uv index, rain probalility, humidity and wind gusts are repesented using reusable chart component.

### Loading
An intermediate page shown until a successful response is received from the weather API and AI.

# Tech
### Frontend
1. React - v18.2.0
1. React Select - v5.7.2
1. Typescript - v5.0.4
1. PostCSS - v8.4.23
1. TailwindCSS - v3.3.1
1. Tremor - v2.2.0
1. Apollo Client - v3.7.12

### Backend
1. Next.js - v13.3.0
1. StepZen
1. GraphQL - v16.6.0

### API
1. county-state-city - v3.1.2
1. openai - 3.2.1

# Setup
