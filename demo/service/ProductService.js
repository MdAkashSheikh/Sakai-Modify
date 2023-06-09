import axios from 'axios';

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

    async postProducts(formName, formPhone, formEmail, formCompany, formDesignation, formInterestLebel, formCompanyType, formCommumications2, file){

        const formData = new FormData();
        formData.append("formName", formName);
        formData.append("formPhone", formPhone);
        formData.append("formEmail", formEmail);
        formData.append("formDesignation", formDesignation);
        formData.append("formCompany", formCompany);
        formData.append("formCompanyType", formCompanyType);
        formData.append("formInterestLebel", formInterestLebel);
        formData.append("formComm", formCommumications2);
        formData.append("photo", file);
        
        console.log('FORM_DATA', formName, formPhone, formEmail, formCompany, formDesignation, formInterestLebel, formCompanyType, formCommumications2, file)

        const result = await axios.post(
            "http://36.255.69.40:5000/post",
            formData
        );

    },

    async deleteProduct(id){
        await fetch("http://36.255.69.40:5000/customer/" + id, {
            method: "DELETE",
        });

    },

    getProductsWithOrdersSmall() {
        return fetch('//36.255.69.40:5000/data', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);
    },

};
