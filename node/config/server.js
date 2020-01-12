module.exports = {
    local: {
        open: true,
        port: 3000
    },
    http: {
        open: false,
        port: 80 //80口被apache占用
    },
    https: {
        open: false,
        port: 443
    }
}