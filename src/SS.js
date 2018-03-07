
const fs=require('fs');
const defaultConfig= require('./default')
module.exports = class SS {
    constructor() {
      this.init();
    }
    init() {
      debugger;
      
      fs.readFile('./src/1.json', (err, data) => {
        if (err) throw err;
        
        var obj = JSON.parse(data);
        
        this.map(obj.data);
      });
      // run(url).then((result) => {
      //   this.map(result);
      // });
    }
    map(data) {
      let configs = [];
      // console.log(data);
  
      var i = 0;
      debugger;
  
      for (i; i < data.length; i++) {
        let o = data[i];
        let index = i;
        if (parseInt(o[0], 10) === 100) {
          configs.push({
            "enable": true,
            "password": o[3],
            "method": o[4],
            "remarks": `server${index}`,
            "server": o[1],
            "obfs": "plain",
            "protocol": "origin",
            "server_port": parseInt(o[2], 10),
            "remarks_base64": "5pCs55Om5bel",
            "obfsparam": "",
            "tcp_over_udp": false,
            "udp_over_tcp": false,
            "obfs_udp": false,
            "time": o[5],
            "rate": o[0]
          });
        }
        
  
      }
      console.log(configs);
      this.save(configs);
    }
    save(configs) {
      if (fs.existsSync('./ss.json')) {
        fs.unlinkSync('./ss.json');
      }
      const data = Object.assign({}, defaultConfig, { configs });
      debugger;
      fs.writeFile('./ss.json', JSON.stringify(data), (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('更新成功！！');
      });
    }
  }
  