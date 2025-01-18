# Pin Switcher

Pin Switcher is a Chrome extension that allows you to quickly toggle the pinned
status of your browser tabs, enhancing your browsing efficiency.

## Features

- **Toggle Pin Status**: Easily switch between pinned and unpinned states for
  the currently active tab.
- **Keyboard Shortcut**: Use `Control/Command + I` to toggle the pin status
  without clicking.

## Installation

You can install Pin Switcher directly from the
[Chrome Web Store](https://chromewebstore.google.com/).

## Development

To set up the development environment for Pin Switcher, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/pHo9UBenaA/pin-switcher.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd pin-switcher
   ```

3. **Build the Extension**:

   ```bash
   deno task build
   ```

4. **Load the Extension into Chrome**:

   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" using the toggle in the top right corner.
   - Click "Load unpacked" and select the `dist` directory within your project
     folder.

## License

This project is licensed under the MIT License. See the
[LICENSE](https://github.com/pHo9UBenaA/pin-switcher/blob/master/LICENSE) file
for details.

## Important Information

- **Incognito Mode**: To enable the extension in incognito mode, follow the
  instructions on
  [Google Support](https://support.google.com/chrome/answer/95464).
- **Shortcut Issues**: If the keyboard shortcuts don't work, navigate to
  `chrome://extensions/shortcuts` in Chrome and reassign the keys as needed.

For more details, visit the
[Pin Switcher GitHub Repository](https://github.com/pHo9UBenaA/pin-switcher).
