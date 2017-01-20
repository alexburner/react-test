# testing react component lifecycle & dom refs


*https://facebook.github.io/react/docs/react-component.html*

*https://facebook.github.io/react/docs/refs-and-the-dom.html*


- console.log lifecycle methods

- does parent re-painting mean child is re-painted?

- if yes, does that mean child loses DOM ref?


# results


- parent re-painting does not mean child is re-painted, for things like className

- if parent has child in conditional, and that changes, child is re-painted, but component unmount & mount lifecycle methods are called