#ifdef GL_ES
    precision highp float;
#endif

attribute vec3 a_position;

attribute vec4 a_joint;
attribute vec4 a_weight;

uniform mat4 u_jointMat[2];

uniform mat4 u_modelViewMatrix;
uniform mat4 u_projectionMatrix;

void main(void) 
{
    mat4 skinMat = 
        a_weight.x * u_jointMat[int(a_joint.x)] +
        a_weight.y * u_jointMat[int(a_joint.y)] +
        a_weight.z * u_jointMat[int(a_joint.z)] +
        a_weight.w * u_jointMat[int(a_joint.w)];
    vec4 pos = u_modelViewMatrix * skinMat * vec4(a_position,1.0);
    gl_Position = u_projectionMatrix * pos;
}
