import {forwardRef} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {styled} from '@mui/material/styles';

export function DialogBody(props) {
    const {children, open, onClose, ...rest} = props;

    return (
        <Dialog
            {...rest}
         
            keepMounted
            fullWidth
            scroll="paper"
            open={open}
            // TransitionComponent={Transition}
            onClose={onClose}
        >
            {children}
        </Dialog>
    );
};

export function TitleDialog(props) {
    const {children, closeBtn, ...rest} = props;

    return (
        <DialogTitle {...rest}>
            {children}
            {closeBtn && (
                <CloseButton onClick={closeBtn}>
                    <CloseIcon style={{marginRight: 3}}/>
                </CloseButton>
            )}
        </DialogTitle>
    );
};

export function ContentDialog({children, ...props}) {
    return (
        <DialogContent {...props} dividers>
            {children}
        </DialogContent>
    );
};

export function ActionsDialog({children, ...props}) {
    return (
        <DialogActions {...props}>
            {children}
        </DialogActions>
    );
};

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const CloseButton = styled(IconButton)(({theme}) => ({
    position: 'absolute',
    right: 16,
    top: 12,
    color: theme.palette.grey[500],
}));


// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// export default function ScrollDialog() {
//   const [open, setOpen] = React.useState(false);
//   const [scroll, setScroll] = React.useState('paper');

//   const handleClickOpen = (scrollType) => () => {
//     setOpen(true);
//     setScroll(scrollType);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const descriptionElementRef = React.useRef(null);
//   React.useEffect(() => {
//     if (open) {
//       const { current: descriptionElement } = descriptionElementRef;
//       if (descriptionElement !== null) {
//         descriptionElement.focus();
//       }
//     }
//   }, [open]);

//   return (
//     <div>
//       <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
//       <Button onClick={handleClickOpen('body')}>scroll=body</Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         scroll={scroll}
//         aria-labelledby="scroll-dialog-title"
//         aria-describedby="scroll-dialog-description"
//       >
//         <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
//         <DialogContent dividers={scroll === 'paper'}>
//           <DialogContentText
//             id="scroll-dialog-description"
//             ref={descriptionElementRef}
//             tabIndex={-1}
//           >
//             {[...new Array(50)]
//               .map(
//                 () => `Cras mattis consectetur purus sit amet fermentum.
// Cras justo odio, dapibus ac facilisis in, egestas eget quam.
// Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
// Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
//               )
//               .join('\n')}
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleClose}>Subscribe</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }