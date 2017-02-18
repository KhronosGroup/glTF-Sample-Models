#ifdef GL_ES
    precision highp float;
#endif

varying vec3 v_position;
varying vec3 v_normal;

uniform vec4 u_ambient;
uniform vec4 u_diffuse;
uniform vec4 u_specular;
uniform float u_shininess;

varying vec3 v_light0Direction;

void main(void) 
{
    vec3 normal = normalize(v_normal);
    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);
    vec3 diffuseLight = vec3(0.0, 0.0, 0.0);
    vec3 lightColor = vec3(1.0, 1.0, 1.0);
    vec4 ambient = u_ambient;
    vec4 diffuse = u_diffuse;
    vec4 specular = u_specular;

    vec3 specularLight = vec3(0.0, 0.0, 0.0);
    {
        float specularIntensity = 0.0;
        float attenuation = 1.0;
        vec3 l = normalize(v_light0Direction);
        vec3 viewDir = -normalize(v_position);
        vec3 h = normalize(l+viewDir);
        specularIntensity = max(0.0, pow(max(dot(normal,h), 0.0) , u_shininess)) * attenuation;
        specularLight += lightColor * specularIntensity;
        diffuseLight += lightColor * max(dot(normal,l), 0.0) * attenuation;
    }
    specular.rgb *= specularLight;
    diffuse.rgb *= diffuseLight;
    color.rgb += ambient.xyz;
    color.rgb += diffuse.xyz;
    color.rgb += specular.xyz;
    color.a = diffuse.a;
    gl_FragColor = color;
}
