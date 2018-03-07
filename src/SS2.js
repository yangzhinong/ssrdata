    const fs = require('fs');
    const defaultConfig = require('./default')

    fs.readFile('./src/2.json', (err, data) => {
        if (err) throw err;
        var obj = JSON.parse(data);
        map(obj);
    });

    function map(data) {
        let configs = [];
        for (let i=0; i < data.length; i++) {
            let o = data[i];
            let index = i;
            if (parseInt(o.rate, 10) === 100) {
                configs.push({
                    "enable": true,
                    "password": o.password,
                    "method": o.method,
                    "remarks": `server${index}`,
                    "server": o.ip,
                    "obfs": "plain",
                    "protocol": "origin",
                    "server_port": parseInt(o.port, 10),
                    "remarks_base64": "5pCs55Om5bel",
                    "obfsparam": "",
                    "tcp_over_udp": false,
                    "udp_over_tcp": false,
                    "obfs_udp": false,
                    "time": o.time,
                    "rate": o.rate
                });
            }
        }
        console.log(configs);
        save(configs);
    }

    function save(configs) {
        if (fs.existsSync('./ss2.json')) {
            fs.unlinkSync('./ss2.json');
        }
        const data = Object.assign({}, defaultConfig, {
            configs
        });
        debugger;
        fs.writeFile('./ss2.json', JSON.stringify(data), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('更新成功！！');
        });
    }