precision highp float;

uniform float lambda;
uniform float heightfactor;

varying vec2 xy;
varying vec4 poly0;
varying vec4 poly1;
varying vec3 col;

void main() {
  vec4 p = heightfactor * mix(poly0, poly1, lambda);
  float a = p.x;
  float b = p.y;
  float c = p.z;
  float d = p.w;

  float x = xy.x;
  float y = xy.y;

  vec3 n = vec3(-2.0*a*x-c, -2.0*b*y-d, 1.0);
  float i1 = dot(n, vec3(0.2, 0.2, 0.959166)) / length(n);
  float i2 = dot(n, vec3(-0.1, -0.1, 0.989949)) / length(n);
  float i = max(0.7 * i1 + 0.3 * i2, 0.0);
  i = pow(i, 0.6);
  gl_FragColor = vec4(i * col, 1.0);
}
