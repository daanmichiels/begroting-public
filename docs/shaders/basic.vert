attribute vec2 position;
attribute vec4 polynomial0;
attribute vec4 polynomial1;
attribute vec3 color;

uniform vec2 offset;
uniform vec2 scale;

varying vec2 xy;
varying vec4 poly0;
varying vec4 poly1;
varying vec3 col;

void main() {
  gl_Position = vec4(scale.x * (position.x + offset.x), scale.y * (position.y + offset.y), 0, 1);
  xy = position;
  poly0 = polynomial0;
  poly1 = polynomial1;
  col = color;
}
