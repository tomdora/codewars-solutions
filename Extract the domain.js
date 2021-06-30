const domainName = url =>{
    return url.replace(/http\:\/\/|https\:\/\/|www\./gi, '').split('.')[0];
}
