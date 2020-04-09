## picture-in-picture

```js
import pip from 'picture-in-picture'

// or
const pip = require('picture-in-picture')
```

> One API for picture in picture in all supported browsers

### API

#### `pip.supported: Boolean`

True if pip is supported in this browser.

If false, all bellow methods *will be undefined!*. Do not call pip methods unless this is true.

#### `pip.request(videoEl)`

Requests picture in picture for given video el.

#### `pip.exit(videoEl)`

Exits picture in picture for given video el.

#### `pip.isActive(videoEl): Boolean`

Returns true or false, whether picture in picture is active for given video el.
