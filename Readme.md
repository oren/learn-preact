Preact examples

## Questions

Why isn't babel enough? why do we also need the `babel-plugin-transform-react-jsx`?

Babel plugins were introduced in babel 6. It used to be a tool for transforming ES6 to ES5, but in 6 they changed the default behavior to be only a parser and transformer, no actual code transforms are baked in by default. Presets tell it what to do.
With the plugin, it's able to map jsx declarations to a helper function. by default, it maps/wraps with React.createElement. But by setting @jsx h you are telling the internal definition to update and use the h function instead.
