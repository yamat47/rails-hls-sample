import Rails from "@rails/ujs"

const images = require.context('../images', true)
const imagePath = (name) => images(name, true)

import "../stylesheets/application"

Rails.start()
