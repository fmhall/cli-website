# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A terminal-based personal website that emulates a Unix shell in the browser. Users interact with the site by typing commands like `whois`, `cv`, `ls`, and `cd`. Built with xterm.js for the terminal emulator and deployed via Netlify.

Live at: https://masonhall.tech

## Commands

```bash
npm run build    # Copies xterm.js and aalib.js assets from node_modules to js/ and css/
npm run start    # Runs netlify dev for local development
```

## Architecture

The terminal is implemented using xterm.js with custom extensions:

- **`js/terminal.js`** - Core terminal event loop (`runRootTerminal`). Handles keyboard input, command history, tab completion, and dispatches commands. All user input flows through the `onData` handler.

- **`js/terminal-ext.js`** - Extends the xterm.js Terminal object with custom methods: `prompt()`, `stylePrint()`, `command()`, `openURL()`, and initialization logic. The `extend()` function adds these methods to the terminal instance.

- **`config/commands.js`** - Command registry. The `commands` object maps command names to handler functions. Each handler receives an `args` array and interacts with the terminal via the global `term` object. To add a new command, add a key-value pair to this object.

- **`config/cv.js`** - CV/portfolio data. Each entry contains `name`, `url`, `description`, `contribution`, and optionally `demo`. Companies with a `demo` field automatically get a corresponding command added.

- **`config/fs.js`** - Simulated filesystem. `_DIRS` defines directory contents, `_FILES` defines file contents. Files can be local (inline text) or remote (fetched from URLs).

- **`config/help.js`** - Help text displayed by the `help` command.

- **`config/team.js`** - Team member data for the `whois` command.

## Adding New Commands

1. Add the command function to `config/commands.js`:
```javascript
commandname: function(args) {
  term.stylePrint("output text");
}
```

2. Use `term.stylePrint()` for output (handles word wrap and syntax highlighting)
3. Use `term.openURL()` to open links
4. Use `term.displayURL()` to show clickable URLs
5. Command names wrapped in `%command%` in output get highlighted

## Text Styling

The `colorText(text, color)` function in `terminal.js` supports: `command`, `hyperlink`, `user`, `prompt`.
