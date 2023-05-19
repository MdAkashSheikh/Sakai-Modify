export const NodeService = {
    getTreeNodes() {
        return fetch('//36.255.69.40:5000/data', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.root);
    },

    getTreeTableNodes() {
        return fetch('//36.255.69.40:5000/data', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.root);
    }
};
