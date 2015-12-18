# Using JSX in Angular2 applications

## Exemplary usage

```typescript
@Component({
  selector: Component.toString(),
  inputs: ['val'],
  template: (
    <h1>Hello World</h1>  
  )
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
```

See `example` folder for complete code.
