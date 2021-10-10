React.Component API Reference readMe =>

Each Component has several "LifeCyle Methods" that you can override to run code 
at particular times in the process.

---------------------------------------------------------------------------------------
Commonly used LifeCyle Methods =>

* Mounting *
  - constructor()
  - render()
  - componentDidMount()

* Updating *
  - render()
  - componentDidUpadate()

* Unmounting *
  - componentWillUnmount()

---------------------------------------------------------------------------------------
Explanation => render() =>

The render() method is the onlu Required method in a class component.

When called it should examine this.props && this.state and return one of the following
types:

- React Elements:
- Array and Fragments:
- Portals:
- Strings and Numbers:
- Boolean or Null: