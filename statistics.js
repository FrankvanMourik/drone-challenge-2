var stats;

var statistics = {
  getStats: function(data) {

    return "ALTITUDE"; /* {
      altitude: 0, // data.demo.altitude,
      batteryPercentage: 50, // data.demo.batteryPercentage,
      xVelocity: 0, // data.demo.xVelocity,
      yVelocity: 0, // data.demo.yVelocity,
      zVelocity: 0, // data.demo.zVelcity,
    }*/
  }
}


/*statistics.sendData(JSON.parse(`"demo:
{ controlState: 'CTRL_DEFAULT',
  flyState: 'FLYING_OK',
  batteryPercentage: 87,
  rotation:
   { frontBack: -0.787,
     pitch: -0.787,
     theta: -0.787,
     y: -0.787,
     leftRight: -2.17,
     roll: -2.17,
     phi: -2.17,
     x: -2.17,
     clockwise: -0.135,
     yaw: -0.135,
     psi: -0.135,
     z: -0.135 },
  frontBackDegrees: -0.787,
  leftRightDegrees: -2.17,
  clockwiseDegrees: -0.135,
  altitude: 0,
  altitudeMeters: 0,
  velocity: { x: 0, y: 0, z: 0 },
  xVelocity: 0,
  yVelocity: 0,
  zVelocity: 0,
  frameIndex: 0,
  detection: { camera: [Object], tagIndex: 0 },
  drone: { camera: [Object] } },
visionDetect:
{ nbDetected: 0,
  type: [ 0, 0, 0, 0 ],
  xc: [ 0, 0, 0, 0 ],
  yc: [ 0, 0, 0, 0 ],
  width: [ 0, 0, 0, 0 ],
  height: [ 0, 0, 0, 0 ],
  dist: [ 0, 0, 0, 0 ],
  orientationAngle: [ 0, 0, 0, 0 ],
  rotation: [ [Object], [Object], [Object], [Object] ],
  translation: [ [Object], [Object], [Object], [Object] ],
  cameraSource: [ 0, 0, 0, 0 ] } } }"`
)) */

module.exports = statistics;