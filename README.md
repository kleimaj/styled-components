# React Styled-Components

![Styled-Components Logo](./markdown/images/styled-components.png)

## Why use styled-components?

[Styled Components](https://styled-components.com/) is a Javascript library that helps keep the concerns of styling and element architecture separate and makes components more readable, overall. Furthermore, when you have components that rely on JavaScript for their style, Styled Components gives control of those states back to CSS instead of using a multitude of conditional class names.

### Some drawbacks of CSS:

#### 1. Specificity

In css, the most specific style wins. This is problematic because styles are slowly becoming decentralized and hard to remove or update.

A lack of knowledge of CSS specificity leads to a lot of `!important`s. Which is a lazy way of overriding specificity.

```html

// For example

<style>

p {
    color: red !important;
}

#thing {
    color: green;
}

</style>

<p id="thing">I will be RED.</p>

```

In general, there are a lot of ways of writing CSS which can be difficult when collaborating in a team.

#### 2. CSS Naming Architectures

CSS naming architectures were created to superficially scope CSS styling

BEM (or Block Element Modifier) is the most notable naming architecture.

They're simply a naming convention but won't prevent leaked styling.

```css

.shopping-cart-item {
    color: blue;
}

.shopping-cart-item-item--out-of-stock {
    color: red;
}

```

### CSS pre-processors

CSS pre-processers like SASS and LESS provide styling capabilities such as nesting, mixins, and more which allow more control over how our CSS styles are applied.

```css

.shopping-cart {
    &__item {
        color: blue;
    }
    &--selected {
        color: red;
    }
}

```

## CSS in JS

Local Inline Styles are useful for specificity, but are limited in capabilities (it's only a subset of CSS). They don’t have media queries, keyframes, pseudo-selectors, etc.

For example:

```javascript

    // Vanilla JS
    let element = document.createElement('div');
    element.setAttribute('style', 'color: red; padding: 20px;')

    // React
    <Component
        style={{
            color: "red",
            padding: "20px",
            }}
    />

```


With Styled-Components, JavaScript is used to style our components. When the components are parsed, CSS is generated and attached to the DOM. The CSS used in styled is much more capable than inline styles, allowing for nesting, mixins, and other advanced usage (but not as powerful as a CSS pre-processor).

```javascript

import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

```
