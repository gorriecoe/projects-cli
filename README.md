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
project -v
```

## Commands

### New

Starts the setup process for a new project. The CLI will ask you which installer you want to use and a name for the project.

```bash
project new
```

### Clone

Clones the master branch repository to your local. Then installs any composer, npm or bower packages.

```bash
project clone
```

### Update

Pulls the latest copy of the project from the remote repository. Then installs any composer, npm or bower packages if updated.

```bash
project update
```

### Help

Lists all available commands in the CLI.

```bash
project help
```
