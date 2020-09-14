const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


const address = process.argv[2]

  if(!address) {
    console.log('Please provide a location')
  } else {
    geocode(address, (error, {lattitude, longitude, location}) => {
      if (error) {
        return console.log(error)
      }
        forecast(lattitude, longitude, (error, forecastData) => {
          if (error) {
            return console.log(error)
          }

          console.log(location)
          console.log(forecastData)
        })

    })
  }
