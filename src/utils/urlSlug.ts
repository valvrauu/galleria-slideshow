const urlSlug = (text: string) => {
    return text.trim().toLowerCase().replace(/\s+/g, '-');
};

export default urlSlug;
