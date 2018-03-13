# Orientation Test

## Screenshot

![screenshot](screenshot/screenshot.png)

## Description

This model tests the orientation supplied by nodes in the hierarchy.  The red, green, and blue arrows test X, Y, and Z rotations respectively expressed as quaternions in the nodes.  The Cyan, Magenta, and Yellow arrows test X, Y, and Z rotations respectively expressed with rotation matricies in the nodes.

Each arrow has a target indicator of the same color, opposite the point.  These target indicators have their positions and orientations baked into their vertex data, so do not rely on node transformations to appear correct.

Thus, if each colored arrow points directly at a target of the same color, the test passes.  If an arrow appears to have been rotated away from the target of the same color, it could indicate a misplaced matrix transpose or some other orientation problem.

## License Information

Copyright 2018 Analytical Graphics, Inc.
CC-BY 4.0 https://creativecommons.org/licenses/by/4.0/
Model by Ed Mackey.
