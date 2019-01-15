precision highp float;

attribute vec3 a_position;
attribute vec3 a_normal;

uniform mat3 u_normalMatrix;
uniform mat4 u_modelMatrix;
uniform mat4 u_modelViewProjectionMatrix;

varying vec3 v_normal;
varying vec4 v_fragPos;

void main(void) {
    v_normal = u_normalMatrix * a_normal;
    v_fragPos = u_modelMatrix * vec4(a_position,1.0);
    gl_Position = u_modelViewProjectionMatrix * vec4(a_position,1.0);
}