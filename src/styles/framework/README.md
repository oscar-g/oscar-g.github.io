# CSS-frameowrk

A css framework for rapid prototyping, good typography, and modular code.

## Requirements
Compass
SASS
modular-scale

## Usage (master)

Compile the framework:
````compass compile````

## Usage (modular)
Include the framework from an external SASS or Compass project like so:

Default variables: ````@import `[framework_dir]/vars`;````
Your project's overrides: ````@import `vars`;````
Initialize maps: ````@import `[framework_dir]/maps`;````
Framework: ````@import `[framework_dir]/screen`;````
@import `[framework_dir]/print`;
@import `[framework_dir]/ie`;
