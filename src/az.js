class Az {

    constructor() {
        console.log(2)
    }

    load(url, responseType) {
        return new Promise(async (resolve, reject) => {
            const response = await fetch(url)
            if (response.ok === false)
                reject('Network error');

            switch (responseType) {
                case 'json':
                    resolve(response.json())
                    break;
                case 'arrayBuffer':
                    resolve(response.arrayBuffer())
                    break;
                default:
                    reject('Unknown response type')
            }


        })

    }

    extend(...args) {
        let result = {};
        for (let i = 0; i < args.length; i++) {
            for (let key in args[i]) {
                result[key] = arguments[i][key];
            }
        }
        return result;
    }


}

export default Az;