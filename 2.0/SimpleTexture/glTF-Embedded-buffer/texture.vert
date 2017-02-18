#ifdef GL_ES
    precision highp float;
#endif

attribute vec3 a_position;
attribute vec3 a_normal;
attribute vec2 a_texcoord0;

uniform mat3 u_normalMatrix;
uniform mat4 u_modelViewMatrix;
uniform mat4 u_projectionMatrix;

varying vec3 v_position;
varying vec3 v_normal;
varying vec2 v_texcoord0;

varying vec3 v_light0Direction;

void main(void) 
{
    vec4 pos = u_modelViewMatrix * vec4(a_position, 1.0);
    v_normal = u_normalMatrix * a_normal;
    v_position = pos.xyz;
    v_light0Direction = mat3(u_modelViewMatrix) * vec3(1.0, 1.0, 1.0);
    v_texcoord0 = a_texcoord0;
    gl_Position = u_projectionMatrix * pos;
}
