const Header = ({name, title}) => {
  return (
    <header>
      <h1>{name} {title}</h1>
    </header>
  );
};


//default props
// default props allow us to set values for the props expected in the component and if those are not provided then the default values will take over instead of receiving an error
// and this is great to do when you are specing a component, in other words when you are first designing the component and maybe you're not receiving the data from an API or even a localstorage

Header.defaultProps = {
    title: "Default Title"
}

export default Header;


