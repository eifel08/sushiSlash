# Sushi Slash

An arcade slicing game by Eitan Feldman. Swipe through flying sushi, chain cuts for combo bonuses, and spare the wasabi.

Works with mouse drag and touch swipe, and installs as an offline PWA.

## Rules

- You have 3 lives. A wasabi ball or a dropped piece of sushi costs one.
- Each cut scores 10 points, plus 5 more for every 500 points on your score.
- A combo is 3 or more cuts in one swipe and adds a bonus of 5 × n² (3 items +45, 4 items +80).
- Play starts slow with single items and no wasabi. At 50 points difficulty spikes, then climbs to full speed within 45 seconds, or sooner if you score fast.
- A rare green tea cup starts 3.5 seconds of slow motion. Every sushi item on screen is cut for standard points, wasabi stays dangerous, and each slash on the cup scores double.
- The game is landscape only. Installed, it locks to landscape; in a browser, portrait shows a prompt to rotate.

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
