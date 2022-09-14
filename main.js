function main() {
	var kanvas = document.getElementById("kanvas")
	var gl = kanvas.getContext("webgl")
	
	// vertex shader
	var vertexShaderCode = 
	"void main() {" +
	"}"
	var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER)
	gl.shaderSource(vertexShaderObject, vertexShaderCode)
	gl.compileShader(vertexShaderObject) // disini sudah menjadi .o
	// Fragment Shader
	var fragmentShaderCode = `
	void main() {
		
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
}
