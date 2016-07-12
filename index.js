const ping = require('ping')
const hosts = require('./hosts')

function pingHosts() {

    hosts.forEach(host => {
        ping.promise.probe(host, {
            timeout: 10,
            // numeric: true,
            extra: ["-i 2"],
        })
            .then(res => {
                if (res.alive === true)
                    console.log("Yes " + res.host + ' is alive')
                else 
                    console.log(res.host + 'is down...')
        })
})
};
pingHosts()
