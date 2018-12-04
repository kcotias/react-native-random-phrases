import { colors, globalStyles } from '../../config';

const styles = {
    ...globalStyles,
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundScreens
    },
    button: {
        width: '100%',
        height: 60,
        elevation: 8
    }
};

export default styles;
