function main() {
	/** @type {HTMLCanvasElement} */
	var kanvas = document.getElementById("kanvas")
	var gl = kanvas.getContext("webgl")

	// untuk menyimpan array
	var vertices = [
		-1.0, -1.0,
		0.0, 0.0,
		1.0, -1.0
	]

	var buffer = gl.createBuffer()
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)

	// vertex shader
	var vertexShaderCode = `
	attribute vec2 aPosition;
	void main() {
		float x = aPosition.x;
		float y = aPosition.y;
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
		float r = 1.0;
		float g = 1.0;
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

	// mengajari GPU cara mengoleksi nilai posisi dari ARRAY_BUFFER
	var aPosition = gl.getAttribLocation(shaderProgram, "aPosition")
	gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)
	gl.enableVertexAttribArray(aPosition)

	gl.clearColor(1.0, 0.0, 0.0, 1.0) // rgb
	gl.clear(gl.COLOR_BUFFER_BIT)

	gl.drawArrays(gl.TRIANGLES, 0, 3)
}
