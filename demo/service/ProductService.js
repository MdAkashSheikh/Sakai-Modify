export const ProductService = {
    getProductsSmall() {
        return fetch('//36.255.69.40:5000/data', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);

    },

    getProducts() {
        return fetch('//36.255.69.40:5000/data', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => {
                // console.log("ABACD", d)
                return d.allData;
            });
    },

    async postProducts(formName, formPhone, formEmail, formDesignation, formCompany, formInfo, formInterestLebel, formComm, file){

        const formData = new FormData();
        formData.append("formName", formName);
        formData.append("formPhone", formPhone);
        formData.append("formEmail", formEmail);
        formData.append("formDesignation", formDesignation);
        formData.append("formCompany", formCompany);
        formData.append("formInfo", formInfo);
        formData.append("formInterestLebel", formInterestLebel);
        formData.append("formComm", formComm);
        formData.append("photo", file);

        const result = await fetch(
            "http://36.255.69.40:5000/post",
            formData
        );
    },

    getProductsWithOrdersSmall() {
        return fetch('//36.255.69.40:5000/data', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);
    },

};
