import React, { Component } from 'react'
import { toastr } from 'react-redux-toastr'

/* global CLOUDINARY_CLOUD_NAME */
/* global CLOUDINARY_UPLOAD_PRESET */

class Uploader extends Component {
  constructor () {
    super()

    // REACT ES6 classes don't autobind, so bind it in the constructor
    // as suggested here: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md#es6-classes
    this.uploadWidget = this.uploadWidget.bind(this)
  }

  uploadWidget () {
    window.cloudinary.openUploadWidget({
      cloud_name: CLOUDINARY_CLOUD_NAME,
      upload_preset: CLOUDINARY_UPLOAD_PRESET,
      sources: [ 'local', 'url', 'camera', 'facebook', 'google_photos' ],
      tags: [ 'dashboard' ],
      theme: 'white',
      multiple: false
    }, (error, result) => {
      if (!error) {
        this.props.savePost(result.map(image => image.public_id))
        return
      }

      if (error.message !== 'User closed widget')
        toastr.error(error.message)
    })
  }

  render () {
    return (
      <a onClick={this.uploadWidget}>{this.props.children}</a>
    )
  }
}

export default Uploader
