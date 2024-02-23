function capitalizeFirstSpace(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
}

console.log(capitalizeFirstSpace("ciamo mondo la terra gira!!!"));
