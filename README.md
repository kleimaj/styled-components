# React Styled-Components

## Why use styled-components?

### Some drawbacks of CSS:

1. Specificity

In css, the most specific style wins. This is problematic because styles are slowly becoming decentralized and hard to remove or update.

A lack of knowledge of CSS specificity leads to a lot of `!important`s. Which is a lazy way of overriding specificity.

```javascript

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

2. CSS Naming Architectures

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