//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

const D = require('Diagnostics')
const Scene = require('Scene')
const camera = Scene.root.find('Camera')
const plane = Scene.root.find('plane0')
plane.width = camera.focalPlane.width
plane.height = camera.focalPlane.height
