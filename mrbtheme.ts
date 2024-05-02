import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #054085 
		"--color-primary-50": "218 226 237", // #dae2ed
		"--color-primary-100": "205 217 231", // #cdd9e7
		"--color-primary-200": "193 207 225", // #c1cfe1
		"--color-primary-300": "155 179 206", // #9bb3ce
		"--color-primary-400": "80 121 170", // #5079aa
		"--color-primary-500": "5 64 133", // #054085
		"--color-primary-600": "5 58 120", // #053a78
		"--color-primary-700": "4 48 100", // #043064
		"--color-primary-800": "3 38 80", // #032650
		"--color-primary-900": "2 31 65", // #021f41
		// secondary | #D40000 
		"--color-secondary-50": "249 217 217", // #f9d9d9
		"--color-secondary-100": "246 204 204", // #f6cccc
		"--color-secondary-200": "244 191 191", // #f4bfbf
		"--color-secondary-300": "238 153 153", // #ee9999
		"--color-secondary-400": "225 77 77", // #e14d4d
		"--color-secondary-500": "212 0 0", // #D40000
		"--color-secondary-600": "191 0 0", // #bf0000
		"--color-secondary-700": "159 0 0", // #9f0000
		"--color-secondary-800": "127 0 0", // #7f0000
		"--color-secondary-900": "104 0 0", // #680000
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #ff0000 
		"--color-error-50": "255 217 217", // #ffd9d9
		"--color-error-100": "255 204 204", // #ffcccc
		"--color-error-200": "255 191 191", // #ffbfbf
		"--color-error-300": "255 153 153", // #ff9999
		"--color-error-400": "255 77 77", // #ff4d4d
		"--color-error-500": "255 0 0", // #ff0000
		"--color-error-600": "230 0 0", // #e60000
		"--color-error-700": "191 0 0", // #bf0000
		"--color-error-800": "153 0 0", // #990000
		"--color-error-900": "125 0 0", // #7d0000
		// surface | #424242 
		"--color-surface-50": "227 227 227", // #e3e3e3
		"--color-surface-100": "217 217 217", // #d9d9d9
		"--color-surface-200": "208 208 208", // #d0d0d0
		"--color-surface-300": "179 179 179", // #b3b3b3
		"--color-surface-400": "123 123 123", // #7b7b7b
		"--color-surface-500": "66 66 66", // #424242
		"--color-surface-600": "59 59 59", // #3b3b3b
		"--color-surface-700": "50 50 50", // #323232
		"--color-surface-800": "40 40 40", // #282828
		"--color-surface-900": "32 32 32", // #202020
		
	}
}