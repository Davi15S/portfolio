module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'windows10_lockscreen': "url('https://wallpaperaccess.com/full/437981.jpg')",
        "desktop": "url('https://cdn.discordapp.com/attachments/930886737285247036/938542193453445120/desktop_wallpaper.png')"
      },
      scale: {
        '130': '1.30',
      }
    },
    fontFamily: {
      "desktop": ['Source Code Pro', 'monospace']
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
