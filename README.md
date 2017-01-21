# testing react component lifecycle & dom refs

**demo: https://alexburner.github.io/react-test**

*(click to toggle thing between A and B)*


## reading


- lifecycle = https://facebook.github.io/react/docs/react-component.html

- dom refs = https://facebook.github.io/react/docs/refs-and-the-dom.html

- unmount = https://facebook.github.io/react/blog/2015/10/01/react-render-and-top-level-api.html


## questions


- console.log lifecycle methods

- does parent re-painting mean child is re-painted?

- if yes, does that mean child loses DOM ref?


## answers


- parent re-painting does not mean child is re-painted, for things like className

- if parent has child in conditional, and that changes, child is re-painted, but child's component unmount & mount lifecycle methods are called


## running locally

**build**

```
$ npm run dev
```

**serve**

```
$ cd docs && http-server
```
