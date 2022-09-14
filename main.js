function main() {
	/** @type {HTMLCanvasElement} */
	var kanvas = document.getElementById("kanvas")
	var gl = kanvas.getContext("webgl")
	
	// vertex shader
	var vertexShaderCode = `
	precision mediump float;
	void main() {
		float x = 0.0;
		float y = 0.0;
		gl_PointSize = 50.0;

		gl_Position = vec4(x, y, 0.0, 1.0);
	}`
	var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER)
	gl.shaderSource(vertexShaderObject, vertexShaderCode)
	gl.compileShader(vertexShaderObject) // disini sudah menjadi .o
	
	// Fragment Shader
	var fragmentShaderCode = `
	precision mediump float;
	void main() {
		float r = 1;
		float g = 0.0;
		float b = 1.0;

		gl_FragColor = vec4(r, g, b, 1.0);
	}`
	const fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER)
	gl.shaderSource(fragmentShaderObject, fragmentShaderCode)
	gl.compileShader(fragmentShaderObject) // disini sudah menjadi .o

	var shaderProgram = gl.createProgram() // wadah dari executeable (.exe)
	gl.attachShader(shaderProgram, vertexShaderObject)
	gl.attachShader(shaderProgram, fragmentShaderObject)
	gl.linkProgram(shaderProgram)
	gl.useProgram(shaderProgram)

	gl.clearColor(0.49, 0.73, 0.91, 1.0) // rgb
	gl.clear(gl.COLOR_BUFFER_BIT)

	gl.drawArrays(gl.POINTS, 0, 1)
}
