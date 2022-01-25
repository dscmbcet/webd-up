# Day 1


### Node.js for Windows users
Download from : https://nodejs.org/en/download/

### Node.js for Windows users
```
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

### Node.js for Linux users

Node.js v17.x:

- #### Using Ubuntu
```
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo apt-get install -y nodejs
```

- #### Using Debian, as root
```
curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
apt-get install -y nodejs
```