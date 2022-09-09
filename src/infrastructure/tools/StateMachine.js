export default (enumData, transaction) => ({
    isValidTransaction: (currentEnum, nextEnum) => {
        const currentEnumKey = enumData.key(currentEnum);

        if (!currentEnumKey) return false;

        return transaction[currentEnumKey].some(
            (validNewState) => nextEnum === validNewState
        );
    },
});
