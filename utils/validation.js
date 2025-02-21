exports.validateJson = (data) => {
    if (!Array.isArray(data)) return false;
    return true;
};
