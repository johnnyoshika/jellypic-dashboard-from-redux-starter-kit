import React, { Component } from 'react'
import { toastr } from 'react-redux-toastr'

export class Uploader extends Component {
  uploadWidget() {
    window.cloudinary.openUploadWidget({
      cloud_name: CLOUDINARY_CLOUD_NAME,
      upload_preset: CLOUDINARY_UPLOAD_PRESET,
      sources: [ 'local', 'url', 'camera', 'facebook', 'google_photos'],
      tags:['dashboard'],
      theme: 'white',
      multiple: false
    }, function(error, result) {
      console.log(error, result);

      if (error) {
        if (error.message !== 'User closed widget')
          toastr.error(error.message);
      }
      else {
        toastr.success('Success!', 'Image was uploaded successfully!');
      }
    });
  }

  render () {
    return (
      <a onClick={this.uploadWidget.bind(this)}>{this.props.children}</a>
    )
  }
}

export default Uploader
