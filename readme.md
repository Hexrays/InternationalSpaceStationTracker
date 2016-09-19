# International Space Station Tracker

The International Space Station (ISS) is a habitable satellite, in low Earth orbit. The space station orbits Earth about every 90 minutes —about 16 times a day. The station is moving at approximately to 28,000 km/h, which is pretty damn fast.

This website visualizes the orbital path of the International Space Station by plotting the current latitude and longitude of the space station with a unix timestamp from the [Open Notify API](http://open-notify.org/). Note: if you keep the window open for a few hours, you will see the space station’s path create a linear pattern across the map as the station continues to circle the planet.

## Running

First `npm install` to grab all the necessary dependencies.

Then run `npm start` and open <localhost:9000> in your browser.

Spoiler alert. Nothing happens yet.

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.

### Todos


Bonus:
* Add route for [mars curiosity](https://api.nasa.gov/api.html#MarsPhotos) images
* add a route for pass times
* use a line instead of dots?
