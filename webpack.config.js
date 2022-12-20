export default {
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "sass-loader" },
					{
						loader: "less-loader",
						options: {
							javascriptEnabled: true,
						}
					}
				]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/,
				loader: 'file-loader',
				options: {
					limit: 10000,
					name: '[name].[hash:7].[ext]'
				}
			}

		]
	}
}
