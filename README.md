# React ProgressBar

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/crazyjuice/react-progressbar/blob/dev/LICENSE) [![npm version](https://img.shields.io/npm/v/cjs-react-progressbar.svg?style=flat)](https://www.npmjs.com/package/cjs-react-progressbar) [![Build Status](https://travis-ci.org/crazyjuice/react-progressbar.svg?branch=dev)](https://travis-ci.org/crazyjuice/react-progressbar) [![Coverage Status](https://coveralls.io/repos/github/crazyjuice/react-progressbar/badge.svg?branch=dev)](https://coveralls.io/github/crazyjuice/react-progressbar?branch=dev) [![GitHub issues](https://img.shields.io/github/issues/crazyjuice/react-progressbar.svg)](https://github.com/crazyjuice/react-progressbar/issues)

### Demo
[See demo page](https://crazyjuice.github.io/progressbar.github.io)

### Installation
```javascript
npm i -S cjs-react-progressbar
```

### Import as ES6 module
```javascript
import { ProgressBar } from 'cjs-react-progressbar';
```

### Usage
```javascript
<ProgressBar
  progress={25}
  position="top"
  lineColor="green"
  lineHeight={5}
  zIndex={10}
  customStyles={{ userSelect: 'none' }}
/>
```

### Available options (props)
| Option   | Default      | Type       | Description                                   |
|----------|--------------|------------|-----------------------------------------------|
| progress | **(required)** | **number** | Set progress **_(0-100)_** % |
| position | top          | **string** | Set progress bar position **_(top, bottom_)** |
| lineColor | #77b6ff | **string** | Set progress bar color **_use css color property (hex, rgb, rgba, hsl, hsla)_** |
| lineHeight | 2 | **number** | Set progress bar line height **_(px)_** |
| zIndex | 100 | **number** | Set progress bar stack order |
| customStyles | **(optional)** | **object** | Add custom css styles or overwrite exiting ones |

## License

MIT Licensed. Copyright (c) Piotr Sikora 2018.
