# Box Animated
## Screenshot

![screenshot](screenshot/screenshot.gif)

## Description

This model demonstrates a two-channel animation, one for rotation and the other
translation.  A smaller box rises up out of a larger hollow one, flips over, and
sinks back down.

## Common Problems

![sample animation problem](screenshot/BoxAnimatedBug.png)

This model features a single animation with a pair of channels that have different
lengths.  The "rotation" channel finishes its work before the "translation" channel
is done.  However, these channels are not permitted to get out of sync: The shorter
channel may not loop and begin repeating until all of the channels within that
animation have finished playing.  Client runtimes must ensure that a single input
time is given to all of the channels within a particular animation, for the
animation to remain sensible.

This model will reveal such an issue on subsequent bounces of the inner purple box.
In affected runtimes, the box will begin rotating before it has moved to the top
position, and collide with the blue box.  If you see this, please file an issue
on the affected runtime's issue tracker.

## License Information

Donated by [Cesium](http://cesiumjs.org/) for glTF testing.

This model is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).
