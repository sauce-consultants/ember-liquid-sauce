# ember-liquid-sauce

This addon defines eight new ember liquid fire transitions for card interfaces.

overUp, overDown, overLeft, overRight, revealUp, revealDown, revealLeft and revealRight.

## Installation

In your ember-cli project, run:

```bash
ember install ember-liquid-sauce
```

## Usage

[Define a liquid-fire transition](https://ef4.github.io/liquid-fire/#/transition-map) using any of the eight named reveal transitions:

```javascript
// app/transitions.js
this.transition(
  this.fromRoute('foo'),
  this.toRoute('bar'),
  this.use('overUp', {
    shadow: true
  }),
  this.reverse('revealDown', {
    shadow: true
  })
);
```

Optionally, you can use `{ shadow: true }` as an option to add in a box shadow on the animating content and account for it in the sizing.

### Over Transitions

The old content will remain stationary as new content slides over in the direction specified.

### Reveal Transitions

The old content will slide away in the direction specified, revealing the new content in its place.

**Note:** You'll probably want to make sure that the content being transitioned away from has a background that will mask the new content during the transition.

## Developing

- `git clone https://github.com/sauce-consultants/ember-liquid-sauce.git` this repository
- `cd ember-liquid-sauce`
- `npm install`

## Running the Demo

- `yarn serve`
- Visit the demo app at <http://localhost:4200>.
