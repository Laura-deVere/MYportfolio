module.exports = {
	mode: 'production',
	entry: './main.js',
	output: {
	    filename: './bundle.js'
	},
	devServer: {
    inline:true,
    port: 3000
  }
};