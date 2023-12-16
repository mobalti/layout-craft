# Layout Craft: Opinionated CSS Utility Classes

**Layout Craft** is a collection of opinionated CSS utility classes designed to accelerate the declaration of your initial layout state. These utilities provide a quick start for your projects, allowing you to achieve a solid foundation with minimal effort.

## Installation

### NPM

Install Layout Craft using NPM:

```bash
npm i layout-craft

```

### Import into Your Project

Add the following import statement to your global stylesheet:

```css
@import 'layout-craft/utilities.css';
```

### CDN

Alternatively, you can use the CDN to include Layout Craft directly in your project:

```css
@import 'https://www.unpkg.com/layout-craft@0.0.1/dist/utilities.css';
```

## Key Features

- **Efficiency with Utilities:**

  - **Get Things Done Quickly:**
    - Layout Craft empowers you to accomplish a significant portion of your layout design swiftly with its utility classes.

- **Markup-Friendly Approach:**

  - **Support in the Markup:**
    - Layout Craft ensures that utilities seamlessly integrate into your markup, providing support without dominating your HTML structure.

- **Where() for a Hassle-Free Experience:**
  - **Wrapped in :where():**
    - Utilities are neatly wrapped in the `:where()` selector, eliminating the need for unnecessary battles. They simply support your layout goals.

## Quick Reference

### Grid Layouts

- **`block`:**

  - Displays elements as a grid container.

- **Alignment:**
  - `block-start-start`, `block-start-center`, `block-start-end`, ...
    - Aligns and justifies items within the block-level grid container.

### Inline Layouts

- **`inline`:**

  - Displays elements as an inline-level grid container with column auto-flow.

- **Alignment:**
  - `inline-start-start`, `inline-start-center`, `inline-start-end`, ...
    - Aligns and justifies items within the inline-level grid container.

### Flexbox

- **`inline-wrap`:**
  - Displays elements as a flex container with wrapping.

### Spacing

- **`space-between`:**

  - Applies `justify-content: space-between` to create consistent space between items.

- **`space-between-block`:**

  - Applies `align-content: space-between` for space control in block containers.

  _Note: Layout Craft exclusively supports `justify-content: space-between` and `align-content: space-between` for controlling space. Other values such as `start`, `end`, and `center` are intentionally excluded to maintain consistency._

### Gap Sizes

- **`gap-1`, `gap-2`, `gap-3`, `gap-4`:**
  - Sets different gap sizes (`0.5rem`, `1rem`, `1.5rem`, `2rem`) between grid or flex items.

### Responsive Content Sizing

- **`content-1`, `content-2`, `content-3`, `content-4`:**
  - Sets responsive inline sizes using `min(100%, ...)`. Adjusts to different viewport sizes.
    - `content-1`: `min(100%, 370px)`.
    - `content-2`: `min(100%, 620px)`.
    - `content-3`: `min(100%, 1230px)`.
    - `content-4`: `min(100%, 1600px)`.

## Example

Explore how these utilities work and how to override them in this [demo](https://codepen.io/mobalti/pen/MWLLePz).

## Feedback and Contributions

Your feedback and contributions are highly valued.

Happy crafting!

[Arby](https://github.com/mobalti)
