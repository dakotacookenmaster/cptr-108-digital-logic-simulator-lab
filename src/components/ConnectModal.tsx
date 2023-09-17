import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Gate } from '../helpers/Gates';

const style = {
    margin: "0 auto",
    marginTop: "10vh",
    width: "fit-content",
    overflow: "auto",
    maxHeight: "80vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    boxShadow: 24,
    p: 4,
};

export default function ConnectModal(props: { defaultPinNumber: number | undefined, setDefaultPinNumber: Function, receivingGate: Gate | undefined, isOpen: boolean, setIsOpen: Function, handleCompleteConnect: Function }) {
    const { isOpen, setIsOpen, handleCompleteConnect, setDefaultPinNumber, defaultPinNumber, receivingGate } = props
    const handleClose = () => setIsOpen(false)

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FormControl>
                        <FormLabel id="receiving-pins">Receiving Pins</FormLabel>
                        <RadioGroup
                            aria-labelledby="receiving-pins"
                            name="receiving-pins"
                            value={defaultPinNumber}
                            onChange={(event) => {
                                const { value } = event.target
                                setDefaultPinNumber(+value)
                            }}
                        >
                            {
                                receivingGate?.inputs.map((input, index) => {
                                    if (!input.gate) {
                                        return (
                                            <FormControlLabel
                                                key={`input-connection-${index}`}
                                                value={`${index}`}
                                                control={<Radio />}
                                                label={input.label.trim() !== "" ? input.label : `Input #${index}`}
                                            />
                                        )
                                    }
                                })
                            }
                        </RadioGroup>
                    </FormControl>
                    <Button variant="outlined" sx={{ marginTop: "30px auto" }} onClick={() => handleCompleteConnect(defaultPinNumber)}>Submit</Button>
                </Box>
            </Modal>
        </div>
    );
}
