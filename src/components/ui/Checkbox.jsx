import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
    root: {
        color: '#8ac926',
        '&$checked': {
            color: '#8ac926',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default GreenCheckbox;
