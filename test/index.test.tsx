import * as ReactDOM from 'react-dom';
import { ExampleComponent } from '../dist';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ExampleComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
