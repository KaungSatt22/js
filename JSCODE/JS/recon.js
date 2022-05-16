const generateSubdomains = function(length){
    const charset = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let subdomains = charset;
    for(let i= 1; i < length; i++){
        let temp =[]
        for(let k=0;k < subdomains.length;k++){
            let subdomain = subdomains[k]
            for(let m=0;m < charset.length; m++){
                let letter = charset[m];
                temp.push(subdomain + letter)
            }
        }
        subdomains = temp
        return subdomains;
    }
}
const subdomains = generateSubdomains(6)
console.log(subdomains)