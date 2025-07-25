import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import imagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr(),
		imagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false,
			},
			optipng: {
				optimizationLevel: 7,
			},
			mozjpeg: {
				quality: 80,
			},
			pngquant: {
				quality: [0.7, 0.9],
				speed: 3,
			},
			svgo: {
				plugins: [
					{
						name: 'removeViewBox',
						active: false,
					},
					{
						name: 'removeEmptyAttrs',
						active: false,
					},
				],
			},
		}),
	],
	server: {
		host: true,
	},
	base: '/kursnova-tech/',
})
