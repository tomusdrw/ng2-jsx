
class Ng2JsxElement {

  public constructor(
      private elem, 
      private props, 
      private children : Ng2JsxElement[]) {
  }

  private propsToAttributes (props) : string {
    if (props === null) {
      return '';
    }
    return ' ' + Object.keys(props).map((name) => {
      return `${name}="${props[name]}"`; 
    }).join(' ');
  }

  private get selfDirective () {
    if (typeof this.elem === 'string') {
      return [];
    }
    return [this.elem];
  }

  public get directives () {
    return this.selfDirective
      .concat(
        this.children.map((child) => {
          return child.directives
        })
      );
  }


  public toString () : string {
    const attributes = this.propsToAttributes(this.props);
    return `
      <${this.elem}${attributes}>
        ${this.children.join('\n')}
      </${this.elem}>
      `;
  }
}

interface INg2Jsx {
  (elem: any, props: any, children: Ng2JsxElement[]) : Ng2JsxElement;
  keep : () => void;
}

export const element = <INg2Jsx> function ng2jsx (elem, props, ...children) {
  return new Ng2JsxElement(elem, props, children);
}
export function wrap(e : any) { return e; }
