/* @jsx ng2jsx.element */

import 'reflect-metadata';

import {CORE_DIRECTIVES} from 'angular2/common';
import {Component} from 'angular2/core';

import * as ng2jsx from '../lib/ng2jsx';

@Component({
  selector: Component.toString(),
  inputs: ['val'],
  // Referencing ng2jsx at least once to force compiler to keep that
  template: ng2jsx.wrap((
    <h1>Hello World</h1>  
  ))
})
class JsxComponent {
  public val : string;

  static toString () {
    return 'jsx-component';
  }
}

@Component({
  selector: JsxContainer.toString(),
  directives: [CORE_DIRECTIVES, JsxContainer.tpl.directives],
  template: JsxContainer.tpl
})
class JsxContainer {
  static toString () {
    return 'jsx-container';
  }

  static get tpl () {
    return (
      <div class="whateva">
        <JsxComponent
          val={'test'}
        />
      </div>
    );
  }
}


console.log(JsxContainer.tpl.toString());
console.log(JsxContainer.tpl.directives);
