precision highp float;
uniform vec4 u_ambient;
uniform vec4 u_diffuse;
uniform vec4 u_specular;
uniform float u_shininess;
uniform float u_transparency;
uniform vec3 u_light0Color;
uniform vec3 u_light0Attenuation;
uniform vec3 u_light1Color;
uniform vec3 u_light1Attenuation;
varying vec3 v_position;
varying vec3 v_normal;
varying vec3 v_light0Position;
varying vec3 v_light1Position;
void main(void) {
    vec3 normal = normalize(v_normal);
    vec4 diffuse = u_diffuse;
    vec3 diffuseLight = vec3(0.0, 0.0, 0.0);
    vec3 specular = u_specular.rgb;
    vec3 specularLight = vec3(0.0, 0.0, 0.0);
    vec3 ambient = u_ambient.rgb;
    vec3 viewDir = -normalize(v_position);
    vec3 ambientLight = vec3(0.0, 0.0, 0.0);
    {
    vec3 VP = v_light0Position - v_position;
    vec3 l = normalize(VP);
    float range = length(VP);
    float attenuation = 1.0 / (u_light0Attenuation.x + (u_light0Attenuation.y * range) + (u_light0Attenuation.z * range * range));
    diffuseLight += u_light0Color * max(dot(normal, l), 0.) * attenuation;
    vec3 reflectDir = reflect(-l, normal);
    float specularIntensity = max(0., pow(max(dot(reflectDir, viewDir), 0.), u_shininess)) * attenuation;
    specularLight += u_light0Color * specularIntensity;
    }
    {
    vec3 VP = v_light1Position - v_position;
    vec3 l = normalize(VP);
    float range = length(VP);
    float attenuation = 1.0 / (u_light1Attenuation.x + (u_light1Attenuation.y * range) + (u_light1Attenuation.z * range * range));
    diffuseLight += u_light1Color * max(dot(normal, l), 0.) * attenuation;
    vec3 reflectDir = reflect(-l, normal);
    float specularIntensity = max(0., pow(max(dot(reflectDir, viewDir), 0.), u_shininess)) * attenuation;
    specularLight += u_light1Color * specularIntensity;
    }
    ambientLight += vec3(0.2, 0.2, 0.2);
    vec3 color = vec3(0.0, 0.0, 0.0);
    color += diffuse.rgb * diffuseLight;
    color += specular * specularLight;
    color += ambient * ambientLight;
    gl_FragColor = vec4(color * diffuse.a * u_transparency, diffuse.a * u_transparency);
}
