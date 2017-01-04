#ifdef GL_ES
    precision highp float;
#endif

attribute vec3 a_position;

uniform mat4 u_modelViewMatrix;
uniform mat4 u_projectionMatrix;

void main(void) 
{
    gl_Position = u_projectionMatrix * u_modelViewMatrix * vec4(a_position,1.0);
}
