import {Typography, Box, Grid, Button, Card, CardContent, CardActions, Paper, Chip, IconButton, Stack} from "@mui/material";

import {Delete, Edit, MoreVert} from '@mui/icons-material';

export default function Cards ({theme, wasUpdated, handleUpdate, setEditId, handleDelete, setDeleteId, val, index, showPriority}) {
    return (
        <Grid item md={2.8} ml={3} mb={3} mr={0} key={index}>
            <Card component={Paper} elevation={10} direction='row' id={theme.theme} className='customCard'>
                <Stack direction='row' justifyContent={showPriority ? 'space-between' : 'flex-end'}>
                    {showPriority && (
                        <>
                            <Chip
                                component={Paper}
                                elevation={5}
                                className={`${val.priority}`} 
                                style={{
                                    borderRadius: 20,
                                    marginTop: -18,
                                    marginLeft: -15,  
                                    width: '50px',
                                    height: '60px',
                                    display: 'inline-table',
                                }}
                            />
                        </>
                    )}
                    <IconButton style={theme.theme === 'dark' ? {color: '#eeeeee'}: null}>
                        <MoreVert style={{fontSize: 30}}/>
                    </IconButton>
                </Stack>
                <CardContent style={showPriority ? {marginTop: -15} : null}>
                <Typography gutterBottom variant="h5" className='mt-1' align="center" component="div" mb={2}>
                    {val.title}
                </Typography>
                <Typography variant="body">
                    {val.body}
                </Typography>
                <Box>
                    <Typography style={{fontFamily: 'inherit'}} className="mb-2 mt-4">
                        {wasUpdated !== null && wasUpdated === val.id ? `Updated at' ${val.finalHD}` : `Created at ${val.finalHD}`}
                    </Typography>
                    <Typography style={{fontFamily: 'inherit'}}>Priority: {val.priority}</Typography>
                </Box>
                </CardContent>
                <CardActions>
                <Box style={{width: '100%'}} pb={1} pt={1}>
                    <Button
                    id={theme.theme}
                    className='rounded-pill customButton'
                        style={{  
                            fontFamily: 'inherit',
                            fontSize: 13,
                            borderRadius: 10,
                            marginLeft: 10,
                            width: "45%",
                        }}
                        variant="outlined"
                        onClick={() => {
                            handleUpdate(val.id); 
                            setEditId(val.id);
                        }}
                        endIcon={<Edit/>}
                    >
                    Edit
                    </Button>
                    <Button
                    id={theme.theme}
                    className='rounded-pill customButton'
                    style={{
                        fontFamily: 'inherit',
                        marginLeft: 0,
                        marginLeft: 10,
                        fontSize: 13,
                        borderRadius: 10,
                        width: "45%",
                    }}
                    variant="outlined"
                    onClick={() => {
                        handleDelete(val.id); 
                        setDeleteId(val.id);
                    }}
                    endIcon={<Delete/>}
                    >
                    Delete
                    </Button>
                </Box>
            </CardActions>
            </Card>
        </Grid>
    )
}