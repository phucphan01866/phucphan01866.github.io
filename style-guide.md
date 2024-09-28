# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Tomato: hsl(4, 100%, 67%)

### Neutral

- Dark Slate Grey: hsl(234, 29%, 20%)
- Charcoal Grey: hsl(235, 18%, 26%)
- Grey: hsl(231, 7%, 60%)
- White: hsl(0, 0%, 100%)

## Typography

### Body Copy

- Font size (paragraph): 16px

### Font

- Family: [Roboto](https://fonts.google.com/specimen/Roboto)
- Weights: 400, 700

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.
/* ///////////////////// Sign Form ///////////////////// */
.main_SignupForm {
    width: 100%;
    display: grid;
    background-color: var(--primaryWhite);
}

.main_SignupForm > img {
    width: 100%;
    height: auto;
}

.illustrateMobile {
    display: block;
}

.illustrateDesktop {
    display: none;
}

.content {
    display: grid;
    row-gap: 1.5em;
    padding: 1.5em;
}

h1 {
    font-size: 2.5em;
    font-weight: var(--bold);
    color: var(--primaryDarkSlateGrey);
}

p, .content > ul > li {
    line-height: 1.4;
}

.content > ul {
    display: grid;
    row-gap: 1em;
    list-style-type: none;
}

li {
    background-image: url(assets/images/icon-list.svg);
    background-repeat: no-repeat;
    background-position: 0em;
    padding-left: 2.5em;
    overflow-y: visible;
}

form > * {
    display: block;
}

label {
    font-size: 0.8em;
    font-weight: var(--bold);
    margin-bottom: 1em;
}

input,
button {
    border-radius: 0.5em;
    padding: 1.25em;
}

input {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--primaryGrey);
}

form > button {
    margin-top: 1.5em;
    width: 100%;
    font-weight: var(--bold);
    color: var(--primaryWhite);
    background-color: var(--primaryDarkSlateGrey);
    border: none;
}

/* ///////////////////// Success Card ///////////////////// */
.complete_SignupForm {
    background-color: var(--primaryWhite);
    padding: 0em 1.5em;
    display: grid;
    row-gap: 2.5em;
    grid-template-rows: 1fr auto auto 2fr;
    height: 100dvh;
}
.complete_SignupForm > img {
    width: 4em;
    height: auto;
    align-self:flex-end;
}
.complete_SignupForm > button {
    margin-top: 0em;
    height: 3.75em;
    align-self: flex-end;
    margin-bottom: 3em;
    color: var(--primaryWhite);
    background-color: var(--primaryDarkSlateGrey);
}

/* ////////////////////////////////////////// Media ////////////////////////////////////////// */
@media(min-width: 55em) {
    /* ///////////////////// Form Card ///////////////////// */
    :root {
        background-color: var(--primaryCharcoalGrey);
    }

    .main_SignupForm {
        margin: auto;
        width: 55em;
        grid-template-columns: 1fr auto;
        border-radius: 1.5em;
    }

    .main_SignupForm > img {
        grid-column: 2/3;
        grid-row: 1/2;
        height: 100%;
        width: auto;
        padding: 1.5em;
        box-sizing: border-box;
    }

    .illustrateMobile {
        display: none;
    }

    .illustrateDesktop {
        display: block;
    }

    .content {
        grid-column: 1/2;
        grid-row: 1/2;
        row-gap: 0em;
        padding: 5em 2em;
        align-items: center;
    }

    button:hover {
        background-image: linear-gradient(to bottom right, var(--neutralLightRed),var(--neutralTomato));

    }

    /* ///////////////////// Success Card ///////////////////// */
    .complete_SignupForm {
        height: 32em;
        aspect-ratio: 1/1;
        padding: 4em;
        border-radius: 2em;
    }
    .complete_SignupForm > button {
        align-self: flex-end;
        margin-bottom: 0em;
        border: none;
    }
}

.hidden {
    display: none;
}

.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}