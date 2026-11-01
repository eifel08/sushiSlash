# Sushi Slash

An arcade slicing game by Eitan Feldman. Swipe through flying sushi, chain cuts for combo bonuses, and spare the wasabi.

Works with mouse drag and touch swipe, and installs as an offline PWA.

## Rules

- You have 3 lives. A wasabi ball or a dropped piece of sushi costs one.
- Each cut scores 10 points. Cutting several items in one swipe adds a bonus of 5 × n² (2 items +20, 3 items +45, 4 items +80).
- Waves get bigger, faster and spicier the longer you survive and the higher you score.

## Run it

Everything is in `index.html`, so opening that file directly plays the game. Install and offline need it served over HTTPS or from localhost:

```bash
python -m http.server 8000
```

## Files

- `index.html`: the game, including its styles, code-drawn art, synthesised sound and the web app manifest.
- `sw.js`: the service worker. Browsers only run a service worker from its own same-origin JavaScript file, so this one piece cannot be embedded. Deploy it next to `index.html`.

## Support

[Buy me a coffee](https://buymeacoffee.com/eitanfeldman)
