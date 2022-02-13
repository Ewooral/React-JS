# Let’s recap what happens in this example:



function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

## When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.



* We call ReactDOM.render() with the <Welcome name="Sara" /> element.
* React calls the Welcome component with {name: 'Sara'} as the props.
* Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
* React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.

## Note: Always start component names with a capital letter.

[React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.]