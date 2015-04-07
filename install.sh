# !/usr/bin/bash
# ===============
# (c)2015 Matheus Silva MIT license
# Compile script
# ===============
# Fetch latest version
curl -o latest.tar.gz https://github.com/matheusxaviersi/InputMask-js/archive/installer.tar.gz;
tar -xfz latest.tar.gz;
npm install traceur -g;
traceur --script src compiled.js;