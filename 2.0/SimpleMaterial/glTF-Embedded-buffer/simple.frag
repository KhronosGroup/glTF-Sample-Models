#ifdef GL_ES
    precision highp float;
#endif

uniform vec4 u_emission;

void main(void)
{
    gl_FragColor = u_emission;
}