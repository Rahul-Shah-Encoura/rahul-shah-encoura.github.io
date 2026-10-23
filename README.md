# Rahul's Shelf

A static GitHub Pages site for sharing docs, prototypes and tools.

Live at https://rahul-shah-encoura.github.io/

> **This site is public.** Anyone with the link can see it. Never put
> confidential Encoura content here: no internal docs, customer or student
> data, analytics, credentials, or unreleased product work.

## Adding something

1. Make a folder under `docs/`, `prototypes/` or `tools/` with an `index.html` in it,
   e.g. `prototypes/my-thing/index.html`. Any static files (JS, CSS, images) go in the same folder.
2. Add an entry to `items.json`:

   ```json
   {
     "title": "My thing",
     "type": "prototype",
     "path": "prototypes/my-thing/",
     "description": "One line about it.",
     "date": "2026-10-23"
   }
   ```

   `type` is `doc`, `prototype` or `tool`. The home page sorts by `date`, newest first.
3. Commit and push. GitHub Pages republishes in about a minute.

## Previewing locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.
