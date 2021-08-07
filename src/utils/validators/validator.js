export const requiredField = (value) => {
    return value ? undefined : 'Field is required';
}

export const maxLength = (maxLength) => (value) => {
    return value.length > maxLength ? `Max Length is ${maxLength} symbols` : undefined;
}