# React App Example
Just a simple list with sort orders and editable (checkable) items. This is an example of different ways to implement it using React.  

# branch "cls"
Class-based components without any optimization

# branch "fun"
Function-based components without any optimization

# branch "cls-opt"
Class-based components with optimization
- List,Item: Component => PureComponent
- App: this.onItemClick => this.onItemClick.bind(this); Constant handler in Item.props 

# branch "fun-opt"
Function-based components with optimization

