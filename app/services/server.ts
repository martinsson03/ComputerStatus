export function getCards() {
    const d = getDesktops()
    return d
}

function getDesktops () {
    return [
        {id: 1, name: "Desktop", mac: "XXXXXXXX", ip: "192.168.0.201"},
        {id: 2, name: "Desktop", mac: "XXXXXXXX", ip: "192.168.0.201"},
        {id: 3, name: "Desktop", mac: "XXXXXXXX", ip: "192.168.0.201"},
        {id: 4, name: "Desktop", mac: "XXXXXXXX", ip: "192.168.0.201"},
        {id: 5, name: "Desktop", mac: "XXXXXXXX", ip: "192.168.0.201"},
        {id: 6, name: "Desktop", mac: "XXXXXXXX", ip: "192.168.0.201"}
    ]
}