precision highp float;
varying vec2 v_texcoord0;
uniform sampler2D u_diffuse;
void main(void) {
    vec4 diffuse = texture2D(u_diffuse, v_texcoord0);
    gl_FragColor = diffuse;
}