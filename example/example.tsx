/* @jsx ng2jsx */

import {ng2jsx} from '../lib/ng2jsx.ts';

class Component {
  static toString () {
    return 'Component';
  }
}

let jsx = (
  <div class="whateva">
    <Component
      val={'test'}
    />
  </div>
);

console.log(jsx.toString());
console.log(jsx.directives);
