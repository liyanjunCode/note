function loader (source) {
    const str = `
    const style = document.createElement("style");
    style.innerHTML = ${JSON.stringify(source)};
    document.body.appendChild(style);
    `
    return str;
}
module.exports = loader;