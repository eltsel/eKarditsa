module.exports = {
  apps : [{
    name   : "eKarditsa",
    exec_mode:"cluster",
    script : "./node_modules/nuxt/bin/nuxt.js",
	  args:"start",
    cwd:"/root/containers/eKarditsa"
  }]
}
