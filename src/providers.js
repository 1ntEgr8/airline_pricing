const providers = [
    "ITA",
    "GFLIGHTS"
];

export const Providers = makeEnum(providers);

function makeEnum(providers) {
    const enumObj = {};
    for (let provider of providers) {
        enumObj[provider] = Symbol(provider);
    }
    return Object.freeze(enumObj);
}