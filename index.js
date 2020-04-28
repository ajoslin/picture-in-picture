module.exports = exports.default = getPip()

function getPip () {
  if (typeof document === 'undefined') return { supported: false }

  var video = document.createElement('video')

  // Chrome
  // https://developers.google.com/web/updates/2018/10/watch-video-using-picture-in-picture
  if (document.pictureInPictureEnabled && !video.disablePictureInPicture) {
    return {
      supported: true,
      request: function (video) {
        return video.requestPictureInPicture()
      },
      exit: function (video) {
        return document.exitPictureInPicture()
      },
      isActive: function (video) {
        return video === document.pictureInPictureElement
      }
    }
  }

  // Safari
  // https://developer.apple.com/documentation/webkitjs/adding_picture_in_picture_to_your_safari_media_controls
  if (typeof video.webkitSetPresentationMode === 'function') {
    // Mobile safari says it supports webkitPresentationMode, but you can't pip there.
    if (/ipad|iphone/i.test(window.navigator.userAgent)) {
      return { supported: false }
    }
    return {
      supported: true,
      request: function (video) {
        return video.webkitSetPresentationMode('picture-in-picture')
      },
      exit: function (video) {
        return video.webkitSetPresentationMode('inline')
      },
      isActive: function (video) {
        return video.webkitPresentationMode === 'picture-in-picture'
      }
    }
  }

  // No firefox JS API https://github.com/mozilla/standards-positions/issues/72
  return {
    supported: false
  }
}
