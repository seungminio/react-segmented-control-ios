# react-segmented-control-ios

Replica of iOS segmented control component done purely in React. Fully Responsive for all device types. Typescript definition file(d.ts) included.

## Preview

![Segmented-Control](https://media.giphy.com/media/4QEGxn32HWLpEoj7mx/giphy.gif)

### Variants

| Variant | preview|
|---------|--------|
| Base    | ![Base](https://placehold.it/20/007aff/ffffff?text=+)|
| Dark    | ![Dark](https://placehold.it/20/333333/ffffff?text=+)|
| Success    | ![Success](https://placehold.it/20/5cb85c/ffffff?text=+)|
| Error    | ![Error](https://placehold.it/20/d9534f/ffffff?text=+)|
| Light    | White fg|

## Installation

`npm install react-segmented-control-ios —-save`  
  
OR
  
`yarn add react-segmented-control-ios`

## Usage

* ### For commonJS import syntax
    `const SegmentedControl = require('react-segmented-control-ios');`

* ### For Es2016
    `import SegmentedControl from 'react-segmented-control-ios';`

## Props

  | Attribute       | Type   | Description                                |              |
  |-----------------|--------|--------------------------------------------|--------------|
  | segments        | array  | List of segments                           | required     |
  | selected        | number | segment index to be selected               | default **0**    |
  | variant         | string | variant name                               | default **base** |
  | onChangeSegment | event  | method to implement logic on click segment | optional     |

### Features
  * **Disable segment** : add `disabled: true` to segment object as shown in the example below to disable that particular segment 

## Example

```
…
import SegmentedControl from 'react-segmented-control-ios';

const segments = [
  { name: 'All' },
  { name: 'Unread', disabled: true },
  { name: 'Drafts' },
  { name: 'Trash' },
  { name: 'Pins' }
];

function handleChange(index) {
    console.log(`selected index : ${index}`);
}

class App extends Component {
  state = {
      segments: segments,
      selected: 0
  };
  
  render() {
    return (
      <div className="App">
        <SegmentedControl
            segments={this.state.segments}
            selected={this.state.selected} 
            variant="base"
            onChangeSegment={handleChange}           
        />        
      </div>
    );
  }
}
…
```
