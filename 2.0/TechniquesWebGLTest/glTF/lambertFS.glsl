precision highp float;

uniform vec4 u_diffuse;
uniform vec4 u_ambient;
uniform mat4 u_lightModelMatrix;

varying vec3 v_normal;
varying vec4 v_fragPos;

void main(void) {
    vec4 diffuse = u_diffuse;
    vec3 lightDir = u_lightModelMatrix[3].xyz - v_fragPos.xyz;
    gl_FragColor = diffuse * (max(dot(v_normal, lightDir), 0.0) + u_ambient);
}