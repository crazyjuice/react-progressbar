# React ProgressBar
### Installation

```javascript
npm i -S git+ssh://git@github.com:crazyjuice/react-progressbar.git
```

### Import
```javascript
import ProgressBar from 'progress-bar';
```
### Usage
```javascript
<ProgressBar
  position="top"
  progress={25}
/>
```
### Available options
| Option   | Default      | Type       | Description                                   |
|----------|--------------|------------|-----------------------------------------------|
| position | top          | **string** | Set progress bar position {**_top, bottom_**} |
| progress | **required** | **number** | Set progress **0-100**%                       |

## License

MIT Licensed. Copyright (c) Piotr Sikora 2018.
