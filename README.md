# worker-script

This is a WIP experiemnt to create a custom element that extends the HTMLScriptElement. 
Script specified by this element will execute in a web worker. 

```html
<script is="worker-script" type="worker">
  function sum(a, b) {
    return a + b;
  }
  console.log('Sum = ', sum(3, 4));
</script>
```

or

```html
<script type="worker" is="worker-script" src="./multiply.js"></script>
```