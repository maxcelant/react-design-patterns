function withStyles(Component) {
  return props => {
    const style = { padding: '30px', margin: '1rem' };
    return <Component style={style} {...props} />;
  };
}

const Button = (props) => <button style={props.style}>Click me!</button>;
const Text = (props) => <p style={props.style}>Hello World!</p>;

export const StyledButton = withStyles(Button);
export const StyledText = withStyles(Text);