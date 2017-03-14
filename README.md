# projects CLI

This is the command-line interface  to help manage your projects.

## Requirements

You'll need the following software installed to get started.

  * [Node.js](http://nodejs.org) 0.12+: Use the installer provided on the NodeJS website.
    * With Node installed, run `[sudo] npm install -g gulp bower`.
  * [Git](http://git-scm.com/downloads): Use the installer for your OS.
    * Windows users can also try [Git for Windows](http://git-for-windows.github.io/).

## Installing

The projects CLI is installed through npm.

```bash
npm install -g projects-cli
```

This will add the `projects` command to your system.

### Updating

The CLI periodically gets updates that add features or fix bugs. Use npm to upgrade the CLI to the newest version.

```bash
npm update -g projects-cli
```

To check what version you currently have, use `-v`.

```bash
projects -v
```

## Commands

### New

Starts the setup process for a new project. The CLI will ask you which installer you want to use and a name for the project.

```bash
projects new
```

### Watch

While inside of your app's folder, use the `watch` command to assemble your app and run a test server.

```bash
cd appName
projects watch
```

While this process is running, you can view the assembled app in your browser, at this URL:

```
http://localhost:8080
```

While the server is running, any changes you make to your HTML, Sass, or JavaScript will automatically be processed and added to your live app.

### Build

To build your app for production, use `projects build`.

```bash
projects build
```

### Update

Updates your Bower packages, which includes projects. Run this command when you want to update an existing project to the newest version of projects.

```bash
projects update
```

### Help

Lists all available commands in the CLI.

```bash
projects help
```

Add a command name at the end to learn how a specific command works.

```bash
projects help new
```
